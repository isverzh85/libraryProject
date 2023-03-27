import React, { useState, useContext, useEffect } from "react";
import styles from "../../Pages/Home/styles.module.scss";
import cn from "classnames";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import logo from "../../../src/assets/logo.png";
import { MyAddedBookListContext } from "../../context/BookList/MyBookListContext.js";
import Navigation from "../../components/Nav/Nav";

const groupBy = (list, key) => {
  return list.reduce((result, item) => {
    const year = item[key];
    (result[year] = result[year] || []).push(item);
    return result;
  }, {});
};

export const HomePage = () => {

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
    <div className={styles.mainContainer}>
        <Navigation getBookData={getBookData} />
            <div className={styles.separateNav}>
            {/* <Navigation getBookData={getBookData} /> */}

            <button
                 type="button"
                 className={cn(styles.navButton, styles.viewButton)}
                 onClick={() => { history.push('/my-book-list') 
                }}
                >
                <img src={logo} alt="logo" className={styles.logo} />
                  View my book list
            </button>
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
                  <div className={styles.bookContainer} key={cover_id}>
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
                      <button
                           className={styles.bookButton}
                           onClick={() => handleAddToBookList(book)}
                     > +
                      </button> 
                    </div>
                    <div>
                     <div className={styles.title}>{book.title}</div>
                     <div className={styles.author}>
                         {book.authors && book.authors.length > 0 ? book.authors[0].name : ""}
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