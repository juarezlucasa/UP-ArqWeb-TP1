// app.js

const express = require('express');
const bodyParser = require('body-parser');

// initialize our express app
const backup = require('./routes/backups.route'); // Imports routes for the backups
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/arquitecturaweb_backups';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/backups', backup)

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
