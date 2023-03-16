import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../Pages/Home/styles.module.scss";
import Axios from "axios";
import cn from "classnames";
import logo from "../../../src/assets/logo.png";
import { MyAddedBookListContext } from "../../context/BookList/MyBookListContext.js";

const groupBy = (list, key) => {
  return list.reduce((result, item) => {
    const year = item[key];
    (result[year] = result[year] || []).push(item);
    return result;
  }, {});
};


export const Nav = () => {
  const history = useHistory(); 
  const [bookList, setBookList] = useState([]);
  const { myAddedBookList, changeAddedBookList } = useContext(MyAddedBookListContext);


  useEffect(() => {
   changeAddedBookList([]);
 }, []);

  const getBookData = async (genre) => {
    let books = [];
    const bookListAPI = `https://openlibrary.org/subjects/${genre}.json`;
    const bookListAPIResponse = await Axios.get(bookListAPI);
    const bookList = bookListAPIResponse.data.works;
    bookList.forEach((book) => {
      let bookToRender = {
         title: book.title,
         authors: book.authors,
         cover_url:  `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg` ,
         first_publish_year: book.first_publish_year ,
         cover_id: book.cover_id ,
       };
      books.push(bookToRender);
    });

    let groupedBooks = groupBy(books, "first_publish_year");
    let years = Object.keys(groupedBooks).sort((year1, year2) => year2 - year1);
    let bookData = years.map((year) => ({ year, books: groupedBooks[year] }));
    setBookList(bookData);
  };


  function handleAddToBookList(book) {
   const { title, authors, cover_url, first_publish_year, cover_id } = book;
   const authorNames = authors.map(author => author.name).join(", ");
   bookList.push({ title, authors, cover_url, first_publish_year, cover_id });
   console.log(` ${title} ${authorNames} ${cover_id} `);
 }

  return (
    <div className={styles.textBoxContainer}>
      <div className={styles.description}>
        <div className={styles.list}>
          <h1 className={styles.name}>Simple Book List Maker by Irina S. </h1>
          <p className={styles.paragraph}>
            This is a project that displays books based on the genre and when
            clicked it retrieves the list of books for that genre.<br></br>It is
            created using <strong>ReactJS</strong> and{" "}
            <strong>OpenLibraryAPI</strong>.
          </p>
        </div>
        <div className={styles.bookListContainer}>
          <nav className={styles.listButtons}>
            <button
              type="button"
              className={cn(styles.navButton, styles.navListItem1)}
              onClick={() => getBookData("cooking")}
            >
              cooking
            </button>
            <button
              type="button"
              className={cn(styles.navButton, styles.navListItem2)}
              onClick={() => getBookData("horror")}
            >
              horror
            </button>
            <button
              type="button"
              className={cn(styles.navButton, styles.navListItem3)}
              onClick={() => getBookData("fantasy")}
            >
              fantasy
            </button>
            <button
              type="button"
              className={cn(styles.navButton, styles.navListItem4)}
              onClick={() => getBookData("mystery")}
            >
              mystery
            </button>
            <button
              type="button"
              className={cn(styles.navButton, styles.navListItem5)}
              onClick={() => getBookData("personal_development")}
            >
              personal development
            </button>
            <button
              type="button"
              className={cn(styles.navButton, styles.navListItem6)}
              onClick={() => getBookData("romance")}
            >
              romance
            </button>
            <button
              type="button"
              className={cn(styles.navButton, styles.navListItem7)}
              onClick={() => getBookData("sci-fi")}
            >
              sci-fi
            </button>
            <img src={logo} alt="logo" className={styles.logo} />
            <button
              type="button"
              className={cn(styles.navButton, styles.separateNav)}
              onClick={() => { history.push('/my-book-list') }}
            >
              View my book list
            </button>
            <Link to="/my-book-list">VIEW</Link>
          </nav>
        </div>
      </div>



      <h1>{myAddedBookList}</h1>



      <div className={styles.listBook}>
        {bookList?.length > 0 &&
          bookList?.map((book, index) => {
            return (
              <div className={styles.mainContainer}>
                <h2 className={styles.year}>{book.year}</h2>
                <div className={styles.listOfBooks}>
                  {book.books?.map((book, index) => {
                    return (
                      <div className={styles.bookContainer}>
                        <div className={styles.book}>
                          {book.cover_id ? (
                            <img
                              className={styles.cover}
                              src={book.cover_url}
                              alt="book cover"
                            />
                          ) : (
                            <div className={styles.bookCoverContainer}></div>
                          )}
                        </div>
                        <button
                          className={styles.bookButton}
                          onClick={() => handleAddToBookList(book)}
                        >
                          +
                        </button>
                        <div className={styles.title}>{book.title} </div>
                        {book.authors?.map((author) => {
                          return (
                            <div className={styles.author}>
                            </div>
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
    </div>
  );
};

export default Nav;