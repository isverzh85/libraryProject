import React, { useState } from 'react';
import styles from '../MyBookList/styles.module.scss';


export const TheBookList = () => {

  return (
      <div className={styles.mainContainer}>
        <h1 className={styles.bookContainer}>My Book List</h1>
      <div className={styles.myBookListContainer}>
        <button className={styles.importButton}>Export to CSV</button>
      </div> 
    </div>
  );
  }

export default TheBookList;



