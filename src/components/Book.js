/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Book.css';

function Book({ book }) {
  console.log(book.volumeInfo.imageLinks.thumbnail);

  return (
    <div className="book">
      <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
      <div>
        <span className="book-title">{book.volumeInfo.title}</span>
        <span className="book-authors">{book.volumeInfo.authors}</span>
      </div>
    </div>
  );
}

export default Book;
