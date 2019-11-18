const express = require('express');
const router = express.Router();
const Book = require('../model/book');

//get books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch(err) {
        res.json({message: err})
    }
});


//get book
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.json(book);
    } catch(err) {
        res.json({message: err})
    }
});

//insert a book
router.post('/', (req, res) => {
    const book = new Book({
        name: req.body.name,
        writer: req.body.writer,
        publisher: req.body.publisher
    });
    console.log(req.body)
    book.save()
    .then(data => {
        console.log(data)
        res.json(data);
    })
    .catch (err => {
        console.log(err)
        res.json({message: err})
    })
});

//delete book
router.delete('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const deleted = await Book.deleteOne({_id: req.params.id});
        res.json(deleted);
    } catch (err) {
        res.json({message: err});
    }
})

module.exports = router;