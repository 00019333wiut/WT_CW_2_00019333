// express web app instance
const express = require('express')

// parse request body to json
const body_parser = require('body-parser')

// for File IO
const path = require('path')

// for web routing
const web_route = require('./routes/web')

// make mock database (raw .json file) available globally in app
global.mock_db = path.join(__dirname, './data/mock_db.json');

const app = express();

// Set the view engine for web routes
app.set('view engine', 'pug');

app.use('/css', express.static('public/css'))
app.use('/js', express.static('public/js'))

app.use('/', web_route); // web routes

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
