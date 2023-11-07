require('express-async-errors');

const express = require('express');
const router = express.Router();
const Book = require('../models/book'); // Import your Sequelize models

// GET all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    // res.json(books);
    res.status(200).json({
      error: false,
      result: books,
    });
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch books.' });
  }
});

// GET a specific book by ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch the book.' });
  }
});

// CREATE a new book
router.post('/', async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Could not create the book.' });
  }
});

// UPDATE a book by ID
router.put('/:id', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      await book.update(req.body);
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not update the book.' });
  }
});

// DELETE a book by ID
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      await book.destroy();
      res.json({ message: 'Book deleted' });
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not delete the book.' });
  }
});

module.exports = router;
