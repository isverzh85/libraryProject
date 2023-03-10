import React, { useState, useContext } from 'react';
import styles from '../MyBookList/styles.module.scss';
import BookListContext from '../../components/BookListIndex/index';

export const MyBookList = ({myBookList}) => {
  const [newBook, setNewBook] = useState({});
  const bookLists = useContext(BookListContext);

  // const handleAddBook = () => {
  //   if (newBook.title && newBook.cover_url) {
  //     setNewBook({ ...addBookList, newBook });
  //     setNewBook({});
  //   }
  // }; 

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setNewBook({ ...newBook, [name]: value });
  // };

return (
      <div className={styles.mainContainer}>
        <h1 className={styles.bookContainer}>My book list</h1>
        <ul>
        {myBookList && myBookList.map((book) => (
          <li key={book.title}>
            <div>{book.title}</div>
            <div>{book.authors.map((author) => author.name).join(', ')}</div>
            <img src={book.cover_url} alt={book.title} />
          </li>
        ))}
      </ul>
          <div className={styles.addBookContainer}>
            <button className={styles.importButton}>Export to CSV</button>
          </div>
      </div> 
  );
}

export default MyBookList;