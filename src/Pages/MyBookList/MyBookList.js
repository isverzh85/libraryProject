import React, { useState, useContext } from 'react';
import styles from '../MyBookList/styles.module.scss';
import { BookListContext } from '../../components/Context/index';


export const MyBookList = ({myBookList}) => {
  const [newBook, setNewBook] = useState({});
  const [bookList, setBookList] = useContext(BookListContext);
  console.log(bookList)

   const handleAddBook = () => {
      if (newBook.title && newBook.cover_url) {
         setBookList([ ...bookList, newBook ]);
         setNewBook({});
     }
   }; 

   const handleInputChange = (event) => {
   const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
   };

return (
  <BookListContext.Provider value={[bookList, setBookList]}>
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
      </BookListContext.Provider>
  );
}

export default MyBookList;