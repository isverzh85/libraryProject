import React from 'react';
import styles from '../MyBookList/styles.module.scss';
import { useState } from 'react';
import Axios from 'axios';
import cn from 'classnames';


export const MyBookList = () => {
    const [addBook, setAddBook] = useState([]); 
    const getBookData = async (genre) => {
        let books = [];
        const bookListAPI = `https://openlibrary.org/subjects/${genre}.json`;
        const bookListAPIResponse = await Axios.get(bookListAPI)
        let bookList = bookListAPIResponse.data.works;

        bookList.forEach((book) => { 
            let bookToRender = {
                title:book.title, 
                authors:book.authors, 
                cover_url: `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`,
                first_publish_year: book.first_publish_year,
                cover_id: book.cover_id
              }
            let newBook ={
                title: book.title,
                author: book.author
            }
                books.push(bookToRender)
                bookList.push(newBook);

           });
    
      



           


  return (
    <div className={styles.myBookListContainer}>
      <h1>My Book List</h1>
      <button className={styles.importButton}>Export to CSV</button>
      <div className={styles.bookContainer}>
      
        </div>     
    </div>
  );
      }}

export default MyBookList;