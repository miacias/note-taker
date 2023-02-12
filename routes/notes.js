// -------- REQUIRED IMPORTS --------

// const express = require("express");
// const router = express.Router();
const notes = require("express").Router();
// const noteClass = require("../model/note-class.js");
const { readFromFile, readAndAppend, writeToFile } = require("../helpers/fsUtils");
const path = require('path');
const uuid = require("../helpers/uuid");

// -------- ROUTE --------

// GET route for retrieving all notes
notes.get("/", (req, res) => {
    // console.log("getting route for all notes");
    readFromFile("./db/notes.json").then(data => res.json(JSON.parse(data)))
})

// note by ID
notes
    // GET route for a specific note by ID
    .route("/:id")
    .get((req, res) => {
        const noteId = req.params.id;
        if (noteId) {
            // checks database and filters for matching note ID
            readFromFile('./db/notes.json')
                .then((data) => JSON.parse(data))
                .then((json) => {
                    const result = json.filter((note) => note.id === noteId);
                    return result.length > 0
                        ? res.json(result)
                        : res.json('No note with that ID');
                });
        }
    })
    // PUT route for a specific note by ID
    .put((req, res) => {
        const noteId = req.params.id;
    })
    // DELETE route for a specific note by ID
    .delete((req, res) => {
        const noteId = req.params.id;
        readFromFile('./db/notes.json')
            .then(data => JSON.parse(data))
            .then(json => {
                // make new array of all notes except identified one to be deleted
                const result = json.filter(note => note.id !== noteId);
                // save new array
                writeToFile("./db/notes.json", result);
                // respond to DELETE request
                res.json(`Note ${noteId} has been deleted!`);
            })
    })

// notes.param("id", (req, res, next, id) => {
//     console.log("this is note ID:", id)
// })

// POST route for new note 
notes.post("/", (req, res) => {
    // deconstructs contents of new note
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };
        readAndAppend(newNote, "./db/notes.json");
        const response = {
            status: "success",
            body: newNote,
        };
        console.log("response:", response)
        // res.send(res.json(response)) // auto-updates
        res.status(201).json(response) // returns newly-created data to Insomnia for testing

    } else {
        res.json("Error in creating new note!")
    }
    // testing using OOP class
    // if (req.body) {
    //     const note = new Note(req.body).saveNote();
    //     console.log(note)
    // }
})

// -------- EXPORT --------

module.exports = notes;