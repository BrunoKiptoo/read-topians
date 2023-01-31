







import '../../App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bookshelf from './Bookshelf';
// import { Link } from 'react-router-dom';
function Search() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);


  
  useEffect(() => {
    const fetchData = async () => {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCHD1EKHZbOKSxmGGm-PN0zKFNA2J5l2S0`);
    const data = await res.json();
    setBooks(data.items.slice(0, 10));
    };
    fetchData();
    }, [query]);

  async function handleSearch(e) {
    e.preventDefault();
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCHD1EKHZbOKSxmGGm-PN0zKFNA2J5l2S0`);
    const data = await res.json();
    console.log(data)
    setBooks(data.items);
  }

  function handleAddToBookshelf(book) {
    setSelectedBooks([...selectedBooks, book]);
  }


  const removeBook = (bookId) => {
    setSelectedBooks(selectedBooks.filter(book => book.id !== bookId));
  };


return (
  <div className="cards__container ">
    <div className="container-fluid ">
      <form onSubmit={handleSearch} className="col-4 mx-auto text-center ">
        <div className="form-group ">
          <input
            className="container mt-5 form-control w-100 text-center"
            type="search"
            placeholder="Search for books"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="form-group mt-3">
          <button className="btn btn-dark" type="submit">
            Search
          </button>
        </div>
      </form>
      <Bookshelf selectedBooks={selectedBooks} removeBook={removeBook} />
      {/* // */}

      <div className="container-fluid mt-3  ">
        <div className="row" >
          {books.map((book, index) => (
            <div
              key={book.id}
              className={`col-md-2 ${index % 5 === 0 ? 'clearfix' : ''}`}
            >
              <div className="card  ">
                {book.volumeInfo.imageLinks &&
                  book.volumeInfo.imageLinks.thumbnail && (
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      className="card-img-top img-fluid"
                      alt="..."
                    />
                  )}
                <div className="card-body ">
                  <a
                    href={book.volumeInfo.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-title"
                  >
                    {book.volumeInfo.title}
                  </a>
                  <p className="card-text">
                    {book.volumeInfo.authors}
                  </p>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleAddToBookshelf(book)}
                  >
                    Add to bookshelf
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

   
  </div>
)
};

export default Search;
  