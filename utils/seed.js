// Import Express.js
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Specify which port the Express.js server will run.
// process.env.PORT stores the port number on which a web server should listen for incoming connections.
const PORT = process.env.PORT || 3001;
// Initialize an instance of Express.js
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Turn on routes
app.use(routes);

// Connect to MongoDB database and start server
// listen() method is responsible for listening for incoming connections on the specified port
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`)
    })
})



