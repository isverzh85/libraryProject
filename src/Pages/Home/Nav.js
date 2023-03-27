import React, { useState, useContext, useEffect } from "react";
import styles from "../../Pages/Home/styles.module.scss";
import cn from "classnames";
import { useHistory } from "react-router-dom";
import logo from "../../../src/assets/logo.png";
import { MyAddedBookListContext } from "../../context/BookList/MyBookListContext.js";
import Navigation from "../../components/Nav/Nav";

export const Nav = ({ book }) => {
  const history = useHistory(); 
  const [bookList, setBookList] = useState([]);
  const { myAddedBookList, changeAddedBookList } = useContext(MyAddedBookListContext);

  useEffect(() => {
   changeAddedBookList([]);
 }, []);

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
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Navigation book={book}/>
        </div>
            <div className={styles.separateNav}>
            <button
                 type="button"
                 className={cn(styles.navButton, styles.viewButton)}
                 onClick={() => { history.push('/my-book-list') }}
                >
                <img src={logo} alt="logo" className={styles.logo} />
                  View my book list
            </button>
            <button
                className={styles.bookButton}
                onClick={() => handleAddToBookList(book)}
            > +
            </button> 
          </div>
      </div>
   )}

export default Nav;