import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  
    <div className={styles.navContainer}>
      <div className={styles.bookNavigationContainer}>
        <div className={styles.descriptionContainer}>
           <div className={styles.descriptionWrapper}>
             <h1 className={styles.descriptionTitle}>
                  Simple Book List Maker by Irina S.
              </h1>
            <p className={styles.paragraph}>
               This is a project that displays books based on the genre and when clicked
              it retrieves the list of books for that genre.
            <br />
             It is created using <strong>ReactJS</strong> and{" "}
                <strong>OpenLibraryAPI</strong>.
            </p>
          </div>
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
            <div className={styles.viewButton}>
            <button
              type="button"
              className={cn(styles.navButton, styles.separateNav)}
              onClick={() => { history.push('/my-book-list') }}
            >
              <img src={logo} alt="logo" className={styles.logo} />
              View my book list
            </button>
            </div>
          </nav>
      </div> 
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
                   const { title, authors, cover_url, first_publish_year, cover_id } = book;
                    return (
                      <div className={styles.bookContainer} >
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
                        <div className={styles.title} >{book.title} </div>
                        {book.authors?.map((author) => {
                          return (
                            <div className={styles.author}  >
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
  );
};

export default Nav;