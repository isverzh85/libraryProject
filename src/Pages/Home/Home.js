import React, { useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import styles from "../../Pages/Home/styles.module.scss";
import cn from "classnames";
import logo from "../../../src/assets/logo.png";
import { MyAddedBookListContext } from "../../context/BookList/MyBookListContext.js";
import Navigation from "../../components/Nav/Nav";

export const HomePage = () => {
  const history = useHistory(); 
  const [ bookList, setBookList] = useState([]);
  const { myAddedBookList, changeAddedBookList } = useContext(MyAddedBookListContext);

  function handleAddToBookList(book) {
    const { title, authors, cover_url, first_publish_year, cover_id } = book;
    let authorNames = '';
    authors.forEach((author, index) => {
      authorNames += author.name;
      if (index !== authors.length - 1) {
        authorNames += ', ';
      }
    });
    const updatedBookList = [...myAddedBookList, { title, authors, cover_url, first_publish_year, cover_id }];
    changeAddedBookList(updatedBookList);
    console.log(`${title} ${authorNames} ${cover_id}`);
  }

  return (
      <div className={styles.flexContainer}>
        <div className={styles.navWrapper}>
             <Navigation setBookList={setBookList} />
             <div className={styles.getDataWrapper}>
               <div className={styles.separateNav}>
                <button
                  type="button"
                  className={cn(styles.navButton, styles.viewButton)}
                  onClick={() => {
                  history.push("/my-book-list");
                 }}
                >
                  <img src={logo} alt="logo" className={styles.logo} />
                     View my book list
               </button>
            </div>
         </div>
    </div>
        <div className={styles.listBookContainer}>
           {bookList?.length > 0 &&
            bookList?.map((book, cover_id) => {
          return (
            <div className={styles.mainContainer} key={cover_id}>
              <h2 className={styles.year}>{book.year}</h2>
              <div className={styles.listOfBooks}>
                 {book.books?.map((book, index) => {
                    const {
                      title,
                      authors,
                      cover_url,
                    first_publish_year,
                    cover_id,
                  } = book;
                  return (
                    <div className={styles.bookContainer} key={cover_id}>
                      <div className={styles.book}>
                      {book.cover_id ? (
                          <div className={styles.coverContainer}>
                            <img
                              className={styles.cover}
                              src={book.cover_url}
                              alt="book cover"
                            />
                            <button
                              className={styles.bookButton}
                              onClick={() => handleAddToBookList(book)}
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <div className={styles.bookCoverContainer}></div>
                        )}
                      </div>
                      <div>
                        <div className={styles.title}>{book.title}</div>
                        <div className={styles.author}>
                          {book.authors && book.authors.length > 0
                            ? book.authors[0].name
                            : ""}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
                        
export default HomePage;