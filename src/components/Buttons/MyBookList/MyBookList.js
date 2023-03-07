import React, { useState } from 'react';
import styles from '../MyBookList/styles.module.scss';



export const MyBookList = ({myBookList}) => {
  const [newBook, setNewBook] = useState({});

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
      <div className={styles.myBookListContainer}>
        {myBookList && myBookList.map((book, index) => (
           <div key={index} className={styles.book}>
            <img className={styles.cover} src={book.cover_url} alt="book cover" />
            <div className={styles.title}>{book.title}</div>
            {book.authors?.map((author) => (
              <div key={author.key} className={styles.author}>
                {author.name}
              </div>
            ))}
          </div>
        ))}
          <div className={styles.addBookContainer}>
            <button className={styles.importButton}>Export to CSV</button>
          </div>
      </div> 
    </div>
  );
}

export default MyBookList;

