const Note = require("../models/notes.models");

// Retrieve all notes for the authenticated user
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.userId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Create a new note
const createNote = async (req, res) => {
  const { title, description } = req.body;

  const newNote = new Note({
    title,
    description,
    userId: req.userId,
  });

  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update an existing note
const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (note.userId.toString() !== req.userId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    note.title = title;
    note.description = description;

    await note.save();

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete a note
const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (note.userId.toString() !== req.userId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await Note.findOneAndDelete({ _id: id }).then(() => {
      return res.status(200).json({ message: "Note deleted successfully" });
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

//get notes by id
const getNoteById = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (note.userId.toString() !== req.userId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { getNotes, createNote, updateNote, deleteNote, getNoteById };
