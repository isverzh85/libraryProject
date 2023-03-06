import React, { useState } from 'react';
import styles from '../MyBookList/styles.module.scss';


export const MyBookList = ({myBookList}) => {

  return (
      <div className={styles.mainContainer}>
        <h1 className={styles.bookContainer}>My Book List</h1>
      <div className={styles.myBookListContainer}>
      {myBookList.map((book, index) => (
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
        <button className={styles.importButton}>Export to CSV</button>
      </div> 
    </div>
  );
  }

export default MyBookList;



