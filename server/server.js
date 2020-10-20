// Express web server

const express = require("express");
const bodyParser = require("body-parser");
const secret = require("./secret");
const setupDB = require('./db');
const passport = require("passport");
const passportGoogle = require("passport-google-oauth");
const cookieSession = require("cookie-session");
const path = require('path');

const main = async () => {
	const app = express();
	const port = 3000;

	const dbConfig = {
		database: secret.DB,
		host: secret.HOST,
		password: secret.PASSWORD,
		user: secret.USER
	}
	const { User, Workout } = await setupDB(dbConfig);

	// setup passport
	const GoogleStrategy = passportGoogle.OAuth2Strategy;
	passport.use(
		new GoogleStrategy(
			{
				clientID: secret.CLIENT_ID,
				clientSecret: secret.CLIENT_SECRET,
				callbackURL: `http://${secret.HOST}:${secret.PORT}/api/auth/google/redirect`
			}, async (accessToken, refreshToken, profile, done) => {
				// arriving here after authenticating with google, we first check to see
				// if this user already exists in our own user database
				const user = await User.findByPk(profile.id);

				// if not, then we create one for this new user
				if (user === null) {
					const newUser = await User.create({id: profile.id, name: profile.displayName});
					done(null, newUser);
					return;
				}

				// otherwise, we send along the existing user data
				done(null, user)
			})
	);

	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		User.findByPk(id).then(user => {
			done(null, user);
		});
	});

	// setup cookie session
	app.use(cookieSession({
		// milliseconds of a day
		maxAge: 24*60*60*1000,
		keys:[secret.COOKIE_SECRET]
	}));

	app.use(passport.initialize());
	app.use(passport.session());

	// log-in route
	app.get("/api/auth/google", passport.authenticate("google", {
		scope: ["profile"]
	}));

	// redirect route
	app.get("/api/auth/google/redirect", passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
		res.redirect('/');
	});

	// parse requests of content-type - application/json
	app.use(bodyParser.json());
	// parse requests of content-type - application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: true }));

	// api routes
	app.use('/', express.static(path.join(__dirname, '../client/build')));

	// CREATE a user
    app.post('/api/users', async (req, res) => {
        const {name} = req.body;
        const newUser = await User.create({name});
        res.status(201).send(`New ID is: ${newUser.id}`);
	})
	
	// GET users
    app.get('/api/users', async (req, res) => {
        const allUsers = await User.findAll()
        res.status(200).send(JSON.stringify(allUsers, null, 2))
    })

	// GET a single user
	app.get('/api/users/:id', async (req, res) => {
		const oneUser = await User.findByPk(req.params.id)
		if (oneUser === null) {
			res.status(404).send();
			return;
		}
        res.status(200).send(JSON.stringify(oneUser, null, 2));
    });

	// DELETE user
	app.delete('/api/users/:id', async (req, res) => {
		try {
			await User.destroy({
				where: {
					id: req.params.id
				}
			})
		} catch (error) {
			console.error(error);
			res.status(500).send();
			return;
		}

		res.status(204).send();
	});

	// CREATE a workout
	app.post('/api/workouts', async (req, res) => {
        const {userId, exercise, category, weight, unit, schema, notes} = req.body
        const newWorkout = {
            userId,
            exercise,
            category
        }
        if (weight) newWorkout.weight = weight;
		if (unit) newWorkout.unit = unit;
		if (schema) newWorkout.schema = schema;
		if (notes) newWorkout.notes = notes;
        let dbWorkout
        try {
            dbWorkout = await Workout.create(newWorkout);
        } catch (err) {
           console.error("error creating user: ", err);
           res.status(500).send();
        }
        // sending back the id which the database created for us on creation
        res.status(201).send(`New ID is: ${dbWorkout.id}`);
    });

	// GET workouts
	app.get('/api/workouts', async (req, res) => {
        const allWorkouts = await Workout.findAll();
        res.status(200).send(JSON.stringify(allWorkouts, null, 2));
    });

	// GET a single workout
	app.get('/api/workouts/:id', async (req, res) => {
		const oneWorkout = await Workout.findByPk(req.params.id)
        if (oneWorkout === null) {
        	res.status(404).send();
        	return;
		}
        res.status(200).send(JSON.stringify(oneWorkout, null, 2));
    });

	// DELETE a workout
	app.delete('/api/workouts/:id', async (req, res) => {
		try {
			await Workout.destroy({
				where: { id: req.params.id }
			});
	 	} catch (error) {
			console.error(error);
			res.status(500).send();
			return;
		}

		res.status(204).send();
	});

	// Handles any requests that don't match the ones above
	app.get('*', (req,res) =>{
		res.sendFile(path.join(__dirname + '/../client/build/index.html'));
	});

	// set port, listen for requests
	const PORT = process.env.PORT || 3000;
	const server = app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}.`);
	});

	server.on('close', () => {
		console.log('Goodbye...');
		connection.end();
	});

};
main().catch((e) => console.error(e));