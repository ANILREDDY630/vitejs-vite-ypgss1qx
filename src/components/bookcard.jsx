import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> ${book.price}</p>
      <img src={book.image} alt={book.title} width="100" />
    </div>
  );
};

export default BookCard;