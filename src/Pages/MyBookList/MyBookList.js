import React, { useState, useContext } from "react";
import styles from "../MyBookList/styles.module.scss";
import { CSVLink } from 'react-csv';
import { MyAddedBookListContext } from '../../context/BookList/MyBookListContext';

export const MyBookList = () => {
  // const [notes, setNotes] = useState({});
  const { myAddedBookList, changeAddedBookList } = useContext(MyAddedBookListContext);

  const csvData = [[
    `title`,
    `authors`,
    `https://covers.openlibrary.org/b/id/${'cover_id'}-L.jpg`,
     `first_publish_year` ,
     `cover_id` ,
   ]   
];
  function handleBookListChanges(book) {
    const { title, authors, cover_url, first_publish_year, cover_id } = book;
    let authorNames = '';
    authors.forEach((author, index) => {
      authorNames += author.name;
      if (index !== authors.length - 1) {
        authorNames += ',';
      }
    });
    const updatedBookList = [...myAddedBookList, { 
      title, 
      authors, 
      cover_url, 
      year: first_publish_year, 
      cover_id, 
    }];
    changeAddedBookList(updatedBookList);
    console.log(`${title} ${authorNames} ${cover_id}`);
  }

  function handleDeleteFromBookList(coverId) {
    const removedBook = myAddedBookList.find((book) => book.cover_id === coverId);
    const updatedBookList = myAddedBookList.filter((book) => book.cover_id !== coverId);
    changeAddedBookList(updatedBookList);
    console.log(removedBook);
  }

  function handleNotesSubmissionForm(coverId, event) {
    const updatedBookList = myAddedBookList.map((book) => {
      if (book.cover_id === coverId) {
        return {
          ...book,
          notes: event.target.value,
        };
      }
      return book;
    });
    changeAddedBookList(updatedBookList);
  }

  return (
    
    <div className={styles.bookContainer}>
    <div className={styles.bookListContainer}>
    <div className={styles.myBookListContainer}>My book list</div>  
    <button className={styles.exportButton}>
    <CSVLink data={csvData}>Export to CSV</CSVLink>
   </button>
    </div>
    <div className={styles.bookInfoContainer}>
        {myAddedBookList?.map((book, index) => (
             <div className={styles.bookDetailsContainer} key={`${book.cover_id}_${index}`}>
               <div className={styles.bookImageContainer}>
                <img className={styles.image} 
                     src={book.cover_url} 
                     alt={book.title} 
                  />
                </div>
              <button className={styles.deleteButton} 
                      onClick={() => handleDeleteFromBookList(book.cover_id)}
                  >-
              </button>
             <div className={styles.bookTitleContainer}>
               <div className={styles.bookAuthorContainer}>
                 <h2 className={styles.title}>{book.title}</h2>
                    {book.authors?.map((author) => (
                 <div className={styles.author} key={author.id}>
                   {author.name}
                </div>
              ))}
           </div>
               <h2 className={styles.year}>{book.first_publish_year}</h2>

               <form>
              <textarea 
                  className={styles.form} 
                  id={`notes_${book.cover_id}`}
                  name={`notes_${book.cover_id}`}
                  placeholder="Add notes..."
                  value={book.notes || ""}
                  onChange={(event) => handleNotesSubmissionForm(book.cover_id, event)}
                ></textarea>
            </form>
            </div>   
        </div>
       ))} 
    </div>
  </div>
 );
};
       
export default MyBookList;