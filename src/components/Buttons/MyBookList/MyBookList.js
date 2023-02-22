import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../MyBookList/styles.module.scss';
import Axios from 'axios';


export const MyBookList = () => {
    const [myBookList, setMyBookList] = useState([]);

    const updateBookData = async (title, cover_url, year, genre) => {
        const bookListAPI = `https://openlibrary.org/subjects/${genre}.json`;
        const bookListAPIResponse = await Axios.get(bookListAPI)
        let bookList = bookListAPIResponse.data.works;
        let book = {
          title: title,
          cover_url: cover_url,
          year: year
        };
        setMyBookList([...myBookList, book]);
      };



    return (
    <div className={styles.myBookListContainer}>
      <h1>My Book List</h1>
      <Link to="/my-book-list"></Link>

      <button className={styles.importButton}>Export to CSV</button>
      <ul>
        {myBookList.map((book, index) => (
          <li key={index}>
            <div>{book.title}</div>
            <div>{book.year}</div>
            <img src={book.cover_url} alt="Book cover" />
          </li>
        ))}
      </ul>
      <MyBookList books={myBookList} />

      <div className={styles.bookContainer}>
     
   </div>
 </div>
);
};

export default MyBookList;



