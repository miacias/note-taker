// -------- REQUIRED IMPORTS --------

const express = require("express");
const app = express();
const api = require("./routes"); // index.js

// allows for Heroku port or local port testing
const PORT = process.env.PORT || 3000;

// imports method that allows dynamic path names
const path = require('path');

// -------- MIDDLEWEAR --------

// allows access to the request body
app.use(express.urlencoded({extended: true}));

// allows access to JSON data
app.use(express.json());

// adds router for notes and uses notes router (imported from notes.js)
app.use("/api", api);

// -------- PAGES --------

// sets default opening page Get route for homepage from index.html
app.use(express.static("public"));

// GET route for notes page
app.get("/notes", (req, res) => { 
    res.sendFile(path.join(__dirname, "/public/notes.html"))
})


// -------- LISTENERS --------

app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));