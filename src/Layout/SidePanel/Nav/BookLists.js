import React from "react";
import styles from '../../SidePanel/Nav/styles.module.scss';
import { useContext } from 'react';
import BookListContext from '../../../context/index';


export const BookLists = () => {
    const bookLists = useContext(BookListContext)
    return (
        <div className={styles.listBook}>
        {bookLists?.length > 0 &&
        bookLists?.map((book, index) => {
    return (

      <div className={styles.mainContainer}>

          <h2 className={styles.year}>{book.year}</h2>
      <div className={styles.listOfBooks}>
           {book.books && book.books?.map((book, index) => {
          return (

            <div key={book.id} className={styles.bookContainer}>
              <div className={styles.book}>
                {book.cover_id? (
                    <img
                       className={styles.cover}
                       src={book.cover_url}
                       alt="book cover"
                    /> 
                ) :  <div className={styles.bookCoverContainer}></div>} 
              </div>
                  {/* <button className={styles.bookButton} onClick={()=> {handleAddBook(book)}} >+</button> */}
              <div className={styles.title}>{book.title} </div>
               {book.authors?.map((author) => {
                 return (
                   <div className={styles.author}>{author.name}</div>
                );
              })}
           </div>
          );
        })}
       </div>
    </div>
    );
  })}
</div>
    )
}
