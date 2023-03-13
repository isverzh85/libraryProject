import React, { useState, useContext } from "react";
import styles from "../MyBookList/styles.module.scss";
import { MyAddedBookListContext } from '../../context/BookList/BookListContext.js';

export const MyBookList = ({ myBookList }) => {
  // const {bookList, setBookListContext, addBookToList} = useContext(BookListContext);
  // console.log(BookListContext)


  const { myAddedBookList } = useContext(MyAddedBookListContext);
  console.log('THIS IS MY CONTEXT:', myAddedBookList);

  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div>
      <h1 className={styles.bookContainer}>My book list</h1>
      <div className={styles.bookListContainer}>
        {/* {!selectedBook ? (
          <>
            {bookList.map((book, index) => (
              <div key={book.cover_id} onClick={() => addBookToList(book)}>
                <img src={book.cover} alt={book.title} />
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <p>{book.year}</p>
              </div>
            ))}
          </>
        ) : (
          <>
            <button onClick={() => setSelectedBook(null)}>
              Back to Book List
            </button>
            <div>
              <img src={selectedBook.cover_url} alt={selectedBook.title} />
              <h2>{selectedBook.title}</h2>
              <p>{selectedBook.author}</p>
              <p>{selectedBook.first_publish_year}</p>
            </div>
          </>
        )} */}
      </div>

      <div className={styles.exportContainer}>
        <button className={styles.exportButton}>Export to CSV</button>
      </div>
    </div>
  );
};

export default MyBookList;
