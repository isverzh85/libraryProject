import React, {useState, useContext} from "react";
import styles from './styles.module.scss';
import BookListContext from './index';

export const BookLists = () => {
  

  const [addBookList, setAddBookList] = useState([]);
  const bookLists = useContext(BookListContext)
  const handleAddBook = (book) => {
      setAddBookList((prevList) => [...prevList, book]);
    };
  
    
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
              <div className={styles.title}>{book.title} </div>
               {book.authors?.map((author) => {
                 return (
                   <div className={styles.author}>{author.name}</div>
                  //  <button className={styles.bookButton} onClick={()=> {handleAddBook(book)}} >+</button> 

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


  

