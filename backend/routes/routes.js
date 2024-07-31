const express = require("express");
const { signUp, signIn } = require("../controller/user.controller");
const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
  getNoteById,
} = require("../controller/notes.controller");
const auth = require("../middleware/auth");

const router = express.Router();
//user api
router.post("/signup", signUp);
router.post("/signin", signIn);

//notes api

router.get("/notes", auth, getNotes);
router.post("/notes", auth, createNote);
router.put("/notes/:id", auth, updateNote);
router.delete("/notes/:id", auth, deleteNote);
router.get("/notes/:id", auth, getNoteById);

module.exports = router;
