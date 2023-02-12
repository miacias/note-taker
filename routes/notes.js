// -------- REQUIRED IMPORTS --------

const notes = require("express").Router();

// const express = require("express");
// const router = express.Router();
const { readFromFile, readAndAppend, writeToFile } = require("../helpers/fsUtils");
const path = require('path');
const { read } = require("fs");
// const uuid = require("../helpers/uuid");

// -------- ROUTE --------

// GET route for retrieving all notes
// router.get("/", (req, res) => {
//     console.log("getting route for all notes");
//     readFromFile("./db/notes-db.json").then(data => {
//         res.json(JSON.parse(data));
//     })
// })
notes.get("/", (req, res) => {
    console.log("getting route for all notes");
    readFromFile("./db/notes.json").then(data => res.json(JSON.parse(data)))
})


notes
    .route("/:note_id")
    // GET route for a specific note by ID
    .get((req, res) => {
        const noteId = req.params.note_id;
        readFromFile('./db/notes.json')
            .then((data) => JSON.parse(data))
            .then((json) => {
                const result = json.filter((note) => note.note_id === noteId);
                return result.length > 0
                    ? res.json(result)
                    : res.json('No note with that ID');
            });
    })
    // PUT route for a specific note by ID
    .put((req, res) => {

    })
    // DELETE route for a specific note by ID
    .delete((req, res) => {
        const noteId = req.params.note_id;
        readFromFile('./db/notes.json')
    })

notes.param("note_id", (req, res, next, note_id) => {
    console.log("this is note ID:", note_id)
})


// -------- EXPORT --------

module.exports = notes;