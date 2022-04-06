
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState();
  const [test, setTest] = useState({});

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);



  if (data) {
    return (
      <div className="App">
        {data.items.map(book => (
          <div>
            {book.volumeInfo.title}
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        Loading...
    </div>
    )
  }

}

export default App;
