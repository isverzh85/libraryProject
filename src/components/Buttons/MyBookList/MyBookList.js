import React, { useState } from 'react';
import { useHref, Link} from 'react-router-dom';
import styles from '../MyBookList/styles.module.scss';
import Axios from 'axios';
import Nav from '../../../Layout/SidePanel/Nav/Nav';

const MyBookList = ({ books }) => {
  return (
    <ul>
      {books.map((book, index) => (
        <li key={index}>
          <div>{book.title}</div>
          <div>{book.year}</div>
          <img src={book.cover_url} alt="Book cover" />
        </li>
      ))}
    </ul>
  );
};

const TheBookList = () => {
  const [bookList, setBookList] = useState([]);

  const updateBookData = async (title, cover_url, year, genre) => {
    const bookListAPI = `https://openlibrary.org/subjects/${genre}.json`;
    const bookListAPIResponse = await Axios.get(bookListAPI);
    let bookList = bookListAPIResponse.data.works;
    let book = {
      title: title,
      cover_url: cover_url,
      year: year
    };
    setBookList([...bookList, book]);
  };

  return (
    <Nav>
      <div className={styles.myBookListContainer}>
        <h1>My Book List</h1>

        <button className={styles.importButton}>Export to CSV</button>

        <MyBookList books={bookList} />

        <div className={styles.bookContainer}></div>
      </div>
    </Nav>
  );
};

export default TheBookList;



