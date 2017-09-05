const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const jobs = require('./jobs/jobs');

// Connect to Database
mongoose.connect(config.database);

//On connection
mongoose.connection.on('connected', () => {
	console.log('Connected to database ' + config.database);
});

//On error
mongoose.connection.on('error', (err) => {
	console.log('Database error: ' + err);
});


const app = express();

const users = require('./routes/users');
const items = require('./routes/items');

const port = 3000;
const ip = "0.0.0.0";

//CORS Middleware
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/items', items);

//index route
app.get('/', (req, res) => {
	res.send('Hello world!');
});

//start server
app.listen(port, ip, () => {
	console.log('Server started on port ' + port);
});

//start price update job
jobs.updateItemPrices();
