const express = require('express');
const app = express();

app.use(express.json());

let books = [
    { id: 1, title: "The Alchemist", author: "Paul Coelho", category: "Fiction" }
];

// Display books
app.get('/books', (req, res) => {
    res.json(books);
});

// Add book
app.post('/books', (req, res) => {
    books.push(req.body);
    res.send("Book added");
});

// Update book
app.put('/books/:id', (req, res) => {
    let book = books.find(b => b.id == req.params.id);
    if (book) Object.assign(book, req.body);
    res.send("Book updated");
});

// Delete book
app.delete('/books/:id', (req, res) => {
    books = books.filter(b => b.id != req.params.id);
    res.send("Book deleted");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});