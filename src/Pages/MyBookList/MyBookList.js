import React, { useState, useContext } from "react";
import styles from "../MyBookList/styles.module.scss";
import { useHistory } from "react-router-dom";
import { CSVLink } from 'react-csv';
import cn from "classnames";
import Axios from "axios";
import logo from "../../../src/assets/logo.png";
import { MyAddedBookListContext } from '../../context/BookList/MyBookListContext';

const groupBy = (list, key) => {
  return list.reduce((result, item) => {
    const year = item[key];
    (result[year] = result[year] || []).push(item);
    return result;
  }, {});
};

export const MyBookList = () => {
  const history = useHistory(); 
  const [bookList, setBookList] = useState([]);
  const { myAddedBookList, changeAddedBookList } = useContext(MyAddedBookListContext);

  const csvData = [[
    `title`,
    `authors`,
    `https://covers.openlibrary.org/b/id/${'cover_id'}-L.jpg`,
     `first_publish_year` ,
     `cover_id` ,
     `notes`,
   ]];

     myAddedBookList.forEach((book) => {
      const authorNames = book.authors.map((author) => author.name).join(',');
      csvData.push([book.title, 
        authorNames, 
        book.cover_url, 
        book.first_publish_year, 
        book.cover_id,
        book.notes || ""
      ]);
  });

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
    <div>
    <div className={styles.navContainer}> 
        <div className={styles.bookNavigationContainer}>
          <div className={styles.descriptionContainer}>
           <div className={styles.descriptionWrapper}>
             <h1 className={styles.descriptionTitle}>
                  Simple Book List Maker by Irina S.
              </h1>
            <p className={styles.paragraph}>
               This is a project that displays books based on the genre and when clicked
               it retrieves the list of books for that genre. It is created using <strong>ReactJS</strong> 
               and{" "}
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
            <div className={styles.separateNav}>
               <button
                 type="button"
                 className={cn(styles.navButton, styles.viewButton)}
                 onClick={() => { history.push('/') }}
                >
                <img src={logo} alt="logo" className={styles.logo} />
                  Hide my book list
               </button>
             </div>
           </nav>
    </div> 
  </div>
</div>
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
                    {book.authors?.map((author) => (
                 <div className={styles.author} key={author.id}>
                   {author.name}
                </div>
              ))}
           </div>
               <h2 className={styles.year}>{book.first_publish_year}</h2>
            </div>   
        </div>
       ))} 
    </div>
    </div>
  </div>
 );
};
       
export default MyBookList;