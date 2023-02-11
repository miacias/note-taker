// -------- REQUIRED IMPORTS --------

const express = require("express");
const app = express();
const routes = require("./routes"); // index.js

// allows for Heroku port and local port testing
const PORT = process.env.PORT || 3001;

// imports method that allows dynamic path names
const path = require('path');

// -------- INIT SERVER --------

// sets default opening page Get route for homepage from index.html
app.use(express.static("/public"));

// allows access to the request body
app.use(express.urlencoded({extended: true}));

// allows access to JSON data
app.use(express.json());


// -------- ROUTERS --------

// adds router for notes and uses notes router (imported from notes.js)
app.use("/routes", routes);


// -------- LISTENERS --------

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));