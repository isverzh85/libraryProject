import React, { useState, useContext } from "react";
import styles from "../MyBookList/styles.module.scss";
import { MyAddedBookListContext } from '../../context/BookList/MyBookListContext';

export const MyBookList = () => {

  const { myAddedBookList } = useContext(MyAddedBookListContext);

  return (
    <div>
      <h1 className={styles.bookContainer}>My book list</h1>
      <div className={styles.bookListContainer}>
        <h1>{myAddedBookList}</h1>
      </div>

      {/* <div className={styles.exportContainer}>
        <button className={styles.exportButton}>Export to CSV</button>
      </div>
      <div className={styles.post}>
        <form className={styles.postForm}>
          <textarea>
            </textarea>
        </form>
      </div> */}
    </div>
  );
};

export default MyBookList;
