// Express web server

const express = require("express");
const bodyParser = require("body-parser");
const secret = require("./secret");
const setupDB = require('./db');

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

	// parse requests of content-type - application/json
	app.use(bodyParser.json());
	// parse requests of content-type - application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: true }));

	// api routes
    app.get('/', (req, res) => {
        res.send('Hello World!');
	})
	
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
		const oneUser = await User.findAll({
			where: { id: req.params.id }
		});
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
		const oneWorkout = await Workout.findAll({
			where: { id: req.params.id }
		});
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