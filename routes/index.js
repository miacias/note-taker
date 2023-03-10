// -------- REQUIRED IMPORTS --------

const express = require("express");
const router = express.Router();
const notesRouter = require("./notes.js");

// -------- MODULAR ROUTERS --------

router.use("/notes", notesRouter);

// -------- EXPORT --------

// export router to server.js
module.exports = router;