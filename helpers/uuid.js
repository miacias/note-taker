const db = require("express").Router();
const { readFromFile } = require("../helpers/fsUtils");
const { read } = require("fs");


// Immediately export a function that generates a string of random numbers and letters
// module.exports = () => {
//     const newId = newId();
//     let ids = [];
//     let id;
//     db.get("/", (req, res) => {
//         readFromFile("../db/notes.json").then(data => res.json(data))
//         console.log(data.note_id)
//     })
//     if ((ids.note_id).match(newId)) {
//         const finalId = newId();
//     } else {
//         let id = newId;
//     }
//     return id
// }

// const newId = () =>
//     Math.floor((1 + Math.random()) * 0x10000)
//         .toString(16)
//         .substring(1);

module.exports = () =>
    Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);