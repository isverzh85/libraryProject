import React, { useContext } from "react";
import styles from "../MyBookList/styles.module.scss";
import { MyAddedBookListContext } from '../../context/BookList/MyBookListContext';

export const MyBookList = () => {

  const { myAddedBookList, changeAddedBookList } = useContext(MyAddedBookListContext);

  function handleBookListChanges(book) {
    const { title, authors, cover_url, first_publish_year, cover_id } = book;
    let authorNames = '';
    authors.forEach((author, index) => {
      authorNames += author.name;
      if (index !== authors.length - 1) {
        authorNames += ', ';
      }
    });
    const updatedBookList = [...myAddedBookList, { 
      title, 
      authors, 
      cover_url, 
      year: first_publish_year, 
      cover_id 
    }];
    changeAddedBookList(updatedBookList);
    console.log(`${title} ${authorNames} ${cover_id}`);
  }

  function handleDeleteFromBookList(bookId) {
    const updatedBookList = myAddedBookList.filter((book) => book.id !== bookId);
    changeAddedBookList(updatedBookList);
  }

  return (
    <div className={styles.bookContainer}>
    <div className={styles.bookListContainer}>
    <div clasName={styles.myBookListContainer}>My book list</div>  
    <button className={styles.exportButton}>Export to CSV</button>
    </div>
    <div className={styles.bookInfoContainer}>
        {myAddedBookList?.map((book) => (
          <div className={styles.bookDetailsContainer} key={book.id}>
            <div className={styles.bookTitleContainer}>
              <img className={styles.image} src={book.cover_url} alt={book.title} />
              <button  className={styles.deleteButton} onClick={() => handleDeleteFromBookList(book.id)}>-</button>
              <h2 className={styles.title}>{book.title}</h2>
                {book.authors?.map((author) => (
                <div className={styles.author} key={author.id}>
                   {author.name}
              </div>
            ))}
               <h2 className={styles.year}>{book.first_publish_year}</h2>
            </div>
            <form>
              <textarea className={styles.form} id="notes" name="Add notes" placeholder="Add notes..."></textarea>
            </form>
        </div>
       ))} 
    </div>
  </div>
 );
};
       
export default MyBookList;
