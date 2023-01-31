// ////

// import React from 'react';

// function Bookshelf({ selectedBooks }) {
// return (
// <div className="container mt-3">
// <h2>Bookshelf</h2>
// <div className="row">
// {selectedBooks.map((book) => (
// <div key={book.id} className="col-md-3">
// <div className="card">
// {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
// <img src={book.volumeInfo.imageLinks.thumbnail} className="card-img-top img-fluid" alt="..."/>
// )}
// <div className="card-body">
// <a href={book.volumeInfo.previewLink} target="_blank">
// <h5 className="card-title">{book.volumeInfo.title}</h5>
// </a>
// {book.volumeInfo.authors && (
// <p className="card-text">{book.volumeInfo.authors.join(', ')}</p>
// )}
// </div>
// </div>
// </div>
// ))}
// </div>
// </div>
// );
// }

// export default Bookshelf;




import React from 'react';

function Bookshelf({ selectedBooks, removeBook }) {
return (
<div className="container mt-3 form-control w-100">
    <>
<h2 className='text-center fw-bold'>BOOKS ADDED </h2>
    </>
<div className="row">
{selectedBooks.map((book) => (
<div key={book.id} className="col-md-2">
<div className="card">
{book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
<img src={book.volumeInfo.imageLinks.thumbnail} className="card-img-top img-fluid" alt="..."/>
)}
<div className="card-body">
<a href={book.volumeInfo.previewLink} target="_blank">
<h5 className="card-title">{book.volumeInfo.title}</h5>
</a>
{book.volumeInfo.authors && (
<p className="card-text">{book.volumeInfo.authors.join(', ')}</p>
)}
<button className="btn btn-danger" onClick={() => removeBook(book.id)}>Remove</button>
</div>
</div>
</div>
))}
</div>
</div>
);
}

export default Bookshelf;
