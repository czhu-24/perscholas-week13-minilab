const books = [ { id: 1, title: "The Great Gatsby" }, { id: 2, title: "To Kill a Mockingbird" }, { id: 3, title: "1984" }, ];

const express = require("express");
const app = express();
const PORT = 3000;

app.get('/books/long', (req, res) => {
	res.send(books);
})

app.get('/books/:id', (req, res) => {
	// Retrieve a book by its ID 
	const bookId = parseInt(req.params.id); 
	const book = books.find((b) => b.id === bookId); 
	if (!book) { 
		return res.status(404).send("Book not found");
	} 
	res.send(`Book Title: ${book.title}`); 
});

app.get('/error-example/:id', (req, res) => {
	const bookId = parseInt(req.params.id); 
	const book = books.find((b) => b.id === bookId); 
	if(!book){
		res.status(404).send("Book not found!");
	}
	res.send(`Book ID: ${req.params.id}`);
})

app.get('/greet/:firstname/:lastname', (req, res) => {
	res.send(`Hello ${req.params.firstname} ${req.params.lastname}`);
})

app.listen(PORT, () => {
	console.log(`Server is starting on Port ${PORT}`);
})
