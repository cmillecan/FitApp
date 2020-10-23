// Express web server
const express = require("express");
const bodyParser = require("body-parser");
const secret = require("./secret");
const setupDB = require("./db");
const passport = require("passport");
const passportGoogle = require("passport-google-oauth");
const cookieSession = require("cookie-session");
const path = require("path");

const main = async () => {
    const app = express();
    const port = 3000;

    const dbConfig = {
        database: secret.DB,
        host: secret.HOST,
        password: secret.PASSWORD,
        user: secret.USER,
    };
    const { User, Workout } = await setupDB(dbConfig);

    // setup passport
    const GoogleStrategy = passportGoogle.OAuth2Strategy;
    passport.use(
        new GoogleStrategy(
            {
                clientID: secret.CLIENT_ID,
                clientSecret: secret.CLIENT_SECRET,
                callbackURL: `http://${secret.HOST}:${secret.PORT}/api/auth/google/redirect`,
            },
            async (accessToken, refreshToken, profile, done) => {
                // arriving here after authenticating with google, we first check to see
                // if this user already exists in our own user database
                const user = await User.findByPk(profile.id);

                // if not, then we create one for this new user
                if (user === null) {
                    const newUser = {
                        id: profile.id,
                        name: profile.displayName,
                    };
                    await User.create(newUser);
                    done(null, newUser);
                    return;
                }

                // otherwise, we send along the existing user data
                done(null, { id: user.id, name: user.name });
            }
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findByPk(id).then((user) => {
            if (user) {
                done(null, { id: user.id, name: user.name });
                return;
            }

            done(null, null);
        });
    });

    // setup cookie session
    app.use(
        cookieSession({
            // milliseconds of a day
            maxAge: 24 * 60 * 60 * 1000,
            keys: [secret.COOKIE_SECRET],
        })
    );

    app.use(passport.initialize());
    app.use(passport.session());

    // log-in route
    app.get(
        "/api/auth/google",
        passport.authenticate("google", {
            scope: ["profile"],
        })
    );

    // redirect route
    app.get(
        "/api/auth/google/redirect",
        passport.authenticate("google", { failureRedirect: "/login" }),
        (req, res) => {
            res.redirect("/");
        }
    );

    // parse requests of content-type - application/json
    app.use(bodyParser.json());
    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));

    // api routes
    app.use("/", express.static(path.join(__dirname, "../client/build")));

    // GET a single user
    app.get("/api/users", async (req, res) => {
        // if user is not logged in
        if (!req.user) {
            res.status(401).send();
            return;
        }

        const oneUser = await User.findByPk(req.user.id);
        if (oneUser === null) {
            res.status(404).send();
            return;
        }
        res.status(200).send(JSON.stringify(oneUser, null, 2));
    });

    // DELETE user
    app.delete("/api/users/:id", async (req, res) => {
        const userId = req.params.id;
        // if user is not logged in, OR if they are but have requested a userId that is not their own
        if (!req.user || req.user.id !== userId) {
            res.status(401).send();
            return;
        }

        try {
            await User.destroy({
                where: {
                    id: req.params.id,
                },
            });
        } catch (error) {
            console.error(error);
            res.status(500).send();
            return;
        }

        res.status(204).send();
    });

    // CREATE a workout
    app.post("/api/users/:id/workouts", async (req, res) => {
        const userId = req.params.id;
        // if user is not logged in, OR if they are but have requested a userId that is not their own
        if (!req.user || req.user.id !== userId) {
            res.status(401).send();
            return;
        }

        const { exercise, category, weight, unit, schema, notes } = req.body;
        const newWorkout = {
            userId,
            exercise,
            category,
        };
        if (weight) newWorkout.weight = weight;
        if (unit) newWorkout.unit = unit;
        if (schema) newWorkout.schema = schema;
        if (notes) newWorkout.notes = notes;
        let dbWorkout;
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
    // TODO: Connie - this should only be used for testing, and should be deleted once you deploy
    app.get("/api/workouts", async (req, res) => {
        const allWorkouts = await Workout.findAll();
        res.status(200).send(JSON.stringify(allWorkouts, null, 2));
    });

    // GET workouts for a user
    app.get("/api/users/:id/workouts", async (req, res) => {
        const userId = req.params.id;
        // if user is not logged in, OR if they are but have requested a userId that is not their own
        if (!req.user || req.user.id !== userId) {
            res.status(401).send();
            return;
        }

        const allWorkouts = await Workout.findAll({
            where: { userId },
        });
        res.status(200).send(JSON.stringify(allWorkouts, null, 2));
    });

    // GET a single workout
    app.get("/api/users/:id/workouts/:workoutId", async (req, res) => {
        const userId = req.params.id;
        // if user is not logged in, OR if they are but have requested a userId that is not their own
        if (!req.user || req.user.id !== userId) {
            res.status(401).send();
            return;
        }

        const oneWorkout = await Workout.findByPk(req.params.workoutId);
        if (oneWorkout === null) {
            res.status(404).send();
            return;
        }
        res.status(200).send(JSON.stringify(oneWorkout, null, 2));
    });

    // DELETE a workout
    app.delete("/api/users/:id/workouts/:workoutId", async (req, res) => {
        const userId = req.params.id;
        // if user is not logged in, OR if they are but have requested a userId that is not their own
        if (!req.user || req.user.id !== userId) {
            res.status(401).send();
            return;
        }

        try {
            await Workout.destroy({
                where: { id: req.params.workoutId },
            });
        } catch (error) {
            console.error(error);
            res.status(500).send();
            return;
        }

        res.status(204).send();
    });

    // Handles any requests that don't match the ones above
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "/../client/build/index.html"));
    });

    // set port, listen for requests
    const PORT = process.env.PORT || 3000;
    const server = app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });

    server.on("close", () => {
        console.log("Goodbye...");
        connection.end();
    });
};
main().catch((e) => console.error(e));
