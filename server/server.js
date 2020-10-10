// Express web server

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const secret = require("./secret");

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: secret.HOST,
  user: secret.USER,
  password: secret.PASSWORD,
  database: secret.DB
})

connection.connect()

connection.end()


/**
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
*/

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to FitApp" });
});

// GET users
app.get('/api/users', (req, res) => {
	res.status(200).send(users);
});

// GET a single user
app.get('/api/users/:id', (req, res) => {
	const user = users.find(c => c.id === parseInt(req.params.id))
	if (!user) return res.status(404).send('The user with the given ID was not found.');
	res.status(200).send(user);
});

// CREATE a user
app.post('/api/user', (req, res) => {
	const { error } = validateWorkout(req.body);
	if (error) return res.status(400).send(error.message);

	const user = {
		// this will change when we add the database
		id: users.length + 1,
		name: req.body.name
	};
	users.push(user);
	res.status(201).send(user);
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
	// look up user
	const user = users.find(c => c.id === parseInt(req.params.id))
	if (!user) return res.status(404).send('The user with the given ID was not found.');
	
	// delete user
	const index = users.indexOf(user);
	users.splice(index, 1);

	res.status(204).send();
});

const workouts = [
	{ id: 1, name: 'workout1' },
	{ id: 2, name: 'workout2' },
	{ id: 3, name: 'workout3' },
];

// GET workouts
app.get('/api/workouts', (req, res) => {
	res.status(200).send(workouts);
});

// GET a single workout
app.get('/api/workouts/:id', (req, res) => {
	const workout = workouts.find(c => c.id === parseInt(req.params.id))
	if (!workout) return res.status(404).send('The workout with the given ID was not found.');
	res.status(200).send(workout);
});

// CREATE a workout
app.post('/api/workouts', (req, res) => {
	const { error } = validateWorkout(req.body);
	if (error) return res.status(400).send(error.message);

	const workout = {
		// this will change when we add the database
		id: workouts.length + 1,
		name: req.body.name
	};
	workouts.push(workout);
	res.status(201).send(workout);
});

// DELETE workout
app.delete('/api/workouts/:id', (req, res) => {
	// look up workout
	const workout = workouts.find(c => c.id === parseInt(req.params.id))
	if (!workout) return res.status(404).send('The workout with the given ID was not found.');
	
	// delete
	const index = workouts.indexOf(workout);
	workouts.splice(index, 1);

	res.status(204).send();
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

server.on('close', () => {
	console.log('Goodbye.');
	connection.end();
});