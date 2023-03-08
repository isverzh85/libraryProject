import React, { useState, useContext } from 'react';

import styles from '../MyBookList/styles.module.scss';



export const MyBookList = ({myBookList}) => {
  const [newBook, setNewBook] = useState({});

  const { addBookList } = useContext();

  const handleAddBook = () => {
    if (newBook.title && newBook.cover_url) {
      setNewBook([...myBookList, newBook]);
      setNewBook({});
    }
  }; 

  // handleAddBook is for adding the book from the nav

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  // would be for the changes


  return (
      <div className={styles.mainContainer}>
        <h1 className={styles.bookContainer}>My book list</h1>
        <ul>
        {addBookList.map((book) => (
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

