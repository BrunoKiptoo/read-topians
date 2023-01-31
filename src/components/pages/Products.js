// import React from 'react';
// import '../../App.css';

// export default function About() {
//   return (
//     <div className=''>
//     <div className='about-container'>
//       <h1 className='about-title'>About Our Library</h1>
//       <p className='about-description'>
//         Welcome to our online book library! We are a community-driven platform that aims to provide access to a wide variety of books to readers from all around the world.
//       </p>
//       <div className='about-section'>
//         <h2 className='about-subtitle'>Our Collection</h2>
//         <p className='about-text'>
//           Our library features a diverse selection of books, from best-selling novels to niche non-fiction titles. We have something for everyone, whether you're a casual reader or a book enthusiast.
//         </p>
//       </div>
//       <div className='about-section'>
//         <h2 className='about-subtitle'>Our Mission</h2>
//         <p className='about-text'>
//           We believe in the power of books to inspire, educate, and entertain, and we are committed to making our library accessible to as many people as possible. That's why we offer our service completely free of charge.
//         </p>
//       </div>
//       <div className='about-section'>
//         <h2 className='about-subtitle'>Our Team</h2>
//         <p className='about-text'>
//           Our team is made up of a group of passionate book lovers who have dedicated their time to building and maintaining this library. We are always looking for ways to improve and expand our collection, and we welcome any feedback or suggestions you may have.
//         </p>
//       </div>
//       <div className='about-section'>
//         <h2 className='about-subtitle'>Contact Us</h2>
//         <p className='about-text'>
//           Email: info@readtopialib.com <br />
//           Phone: +254 701-800-481 <br />
//           Address: 6307 2nd St Ave, Nairobi, Kenya 00100
//         </p>
//       </div>
//       <div className='about-section'>
//         <h2 className='about-subtitle'>Follow Us</h2>
//         <p className='about-text'>
//           Facebook: <a href='https://www.facebook.com/readtopialib' className='about-link'>readtopialib</a> <br />
//           Twitter: <a href='https://twitter.com/readtopialib' className='about-link'>@readtopialib</a> <br />
//           Instagram: <a href='https://www.instagram.com/readtopialib/' className='about-link'>@readtopialib</a>
//         </p>
//       </div>
//     </div>
//     </div>
//   );
// }



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <div className='container my-5'>
      <h1 className='text-center font-weight-bold'>About Our Library</h1>
      <p className='lead'>
        Welcome to our online book library! We are a community-driven platform that aims to provide access to a wide variety of books to readers from all around the world.
      </p>
      <div className='my-5'>
        <h2 className='font-weight-bold'>Our Collection</h2>
        <p>
          Our library features a diverse selection of books, from best-selling novels to niche non-fiction titles. We have something for everyone, whether you're a casual reader or a book enthusiast.
        </p>
      </div>
      <div className='my-5'>
        <h2 className='font-weight-bold'>Our Mission</h2>
        <p>
          We believe in the power of books to inspire, educate, and entertain, and we are committed to making our library accessible to as many people as possible. That's why we offer our service completely free of charge.
        </p>
      </div>
      <div className='my-5'>
        <h2 className='font-weight-bold'>Our Team</h2>
        <p>
          Our team is made up of a group of passionate book lovers who have dedicated their time to building and maintaining this library. We are always looking for ways to improve and expand our collection, and we welcome any feedback or suggestions you may have.
        </p>
      </div>
      <div className='my-5'>
        <h2 className='font-weight-bold'>Contact Us</h2>
        <p>
          Email: info@readtopialib.com <br />
          Phone: +254 701-800-481 <br />
          Address: 6307 2nd St Ave, Nairobi, Kenya 00100
        </p>
      </div>
      <div className='my-5'>
        <h2 className='font-weight-bold'>Follow Us</h2>
        <p>
          Facebook: <a href='https://www.facebook.com/readtopialib' className='text-secondary'>readtopialib</a> <br />
          Twitter: <a href='https://twitter.com/readtopialib' className='text-secondary'>@readtopialib</a> <br />
          Instagram: <a href='https://www.instagram.com/readtopialib/' className='text-secondary'>@readtopialib</a>
        </p>
      </div>
    </div>
  );
}

