// -------- REQUIRED IMPORTS --------
const express = require("express");
const router = express.Router();
const notesRouter = require("./notes.js");

// -------- ROUTERS --------

router.use("/notes", notesRouter);

// export router to server.js
module.exports = router;