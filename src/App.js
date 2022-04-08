/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState();
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('javascript');

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&download=epub&key`)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  if (books) {
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input type="text" value={value} onChange={handleChange} />
          <input type="submit" value="submit" />
        </form>
        <div>
          {books.items.map((book) => (
            <div>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
              {book.volumeInfo.title}
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      Loading...
    </div>
  );
}

export default App;
