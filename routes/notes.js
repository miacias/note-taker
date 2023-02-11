// -------- REQUIRED IMPORTS --------
const express = require("express");
const router = express.Router();
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
// const uuid = require("../helpers/uuid");

// GET route for retrieving all notes
router.get("/", (req, res) => {
    console.log("getting route for all notes");
    readFromFile("./db/notes-db.json").then(data => {
        res.json(JSON.parse(data));
    })
})

module.exports = router;