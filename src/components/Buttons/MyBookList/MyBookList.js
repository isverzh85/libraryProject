import React, { useState } from 'react';
import styles from '../MyBookList/styles.module.scss';
import Axios from 'axios';

// const MyBookList = ({ books }) => {
//   return (
//     <ul>
//       {books.map((book, index) => (
//         <li key={index}>
//           <div>{book.title}</div>
//           <div>{book.year}</div>
//           <img src={book.cover_url} alt="Book cover" />
//         </li>
//       ))}
//     </ul>
//   );
// };

const TheBookList = () => {
//     const [book, setBook] = useState([]);

//   const [bookList, setBookList] = useState([]);

//   const updateBookData = async (title, cover_url, year, genre) => {
//     const bookListAPI = `https://openlibrary.org/subjects/${genre}.json`;
//     const bookListAPIResponse = await Axios.get(bookListAPI);
//     let bookList = bookListAPIResponse.data.works;
//     let book = {
//       title: title,
//       cover_url: cover_url,
//       year: year
//     };

//     setBookList([...bookList, book]);
 // };

  return (
      <div className={styles.mainContainer}>
      <div className={styles.myBookListContainer}>
        <h1 className={styles.bookContainer}>My Book List</h1>
        <button className={styles.importButton}>Export to CSV</button>
        {/* <MyBookList books={bookList} /> */}
      </div> 
    </div>
  );
};

export default TheBookList;



