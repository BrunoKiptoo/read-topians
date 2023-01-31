








// import '../../App.css';
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Search() {
//   const [query, setQuery] = useState('');
//   const [books, setBooks] = useState([]);

//   async function handleSearch(e) {
//     e.preventDefault();
//     const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCHD1EKHZbOKSxmGGm-PN0zKFNA2J5l2S0`);
//     const data = await res.json();
//     console.log(data)
//     setBooks(data.items);
    
//   }

//   return (
//     <div className="container mb3 ">
//       <form onSubmit={handleSearch} className="col-12 text-center">
//         <div className="form-group">
//         <input
//           className="form-control w-50"
//           type="search"
//           placeholder="Search for books"
//           aria-label="Search"
//           value={query}
//           onChange={e => setQuery(e.target.value)}
//         />
//         </div>
//         <div className="form-group ">
//           <button className="btn btn-outline-success" type="submit">Search</button>
//         </div>
//       </form>

//       <div className="container ">
//   <div className="row">
//     {books.map((book, index) => (
//       <div key={book.id} className={`col-md-2 ${index % 5 === 0 ? 'clearfix' : ''}`}>
//         <div className="card">
//           {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
//               <img src={book.volumeInfo.imageLinks.thumbnail} className="card-img-top img-fluid" alt="..."/>
//           )}
//           <div className="card-body">
//           <a href={book.volumeInfo.previewLink} target="_blank">
//             <h5 className="card-title">{book.volumeInfo.title}</h5>
//             </a>
//             {book.volumeInfo.authors && (
//                 <p className="card-text">{book.volumeInfo.authors.join(', ')}</p>
//             )}
            
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
//     </div>
//   );
// }

// export default Search;

import '../../App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bookshelf from './Bookshelf';
// import { Link } from 'react-router-dom';
function Search() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);

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

  return (
  
    <div class="container ">
      <form onSubmit={handleSearch} className="col-12 text-center">
      
        <div className="form-group">
        <input
          className="container mt-3 form-control w-100 text-center"
          type="search"
          placeholder="Search for books"
          aria-label="Search"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        </div>
        
        <div className="form-group ">
          <button className="btn btn-dark" type="submit">Search</button>
        </div>
      </form>

      <div className="container ">
        <div className="row">
          {books.map((book, index) => (
            <div key={book.id} className={`col-md-2 ${index % 5 === 0 ? 'clearfix' : ''}`}>
              <div className="card">
                {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                    <img src={book.volumeInfo.imageLinks.thumbnail} className="card-img-top img-
                    fluid" alt="..."/>
)}
<div className="card-body">

<a href={book.volumeInfo.previewLink} target="_blank">
<h5 className="card-title">{book.volumeInfo.title}</h5>
</a>
{book.volumeInfo.authors && (
<p className="card-text">{book.volumeInfo.authors.join(', ')}</p>
)}
{/* <Link to={'/bookshelf'}></Link> */}
<button className="btn btn-outline-success" onClick={() => handleAddToBookshelf(book)}>Add to Bookshelf</button>
</div>
</div>
</div>
))}
</div>
</div>
<Bookshelf selectedBooks={selectedBooks} />
</div>
);
}

export default Search;

