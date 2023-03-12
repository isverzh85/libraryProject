import React, { useState, useContext } from 'react';
import styles from '../MyBookList/styles.module.scss';
import { BookListContext } from '../../components/Context/index';
import Navigation from '../../Pages/Home/Nav'


export const MyBookList = ({myBookList}) => {
  const [bookList, setBookList] = useContext(BookListContext);
  const [newBook, setNewBook] = useState({title: '', author:'', year:'', cover:''});

  console.log(newBook)
  console.log(bookList)

  
  


return (
      <BookListContext.Provider value={[bookList, setBookList]}>
        <Navigation/>
        <h1 className={styles.bookContainer}>My book list</h1>
        
        <div className={styles.bookListContainer}>
             {bookList.map((book, index) => (
        <div key={book.id}>
          <img src={book.cover} alt={book.title} />
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.year}</p>
        </div>
      ))} 
    </div>
          <div className={styles.exportContainer}>
            <button className={styles.exportButton}>Export to CSV</button>
          </div>
    </BookListContext.Provider>

  );
}


export default MyBookList;