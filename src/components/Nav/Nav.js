import React, { useState } from "react";
import cn from "classnames";
import styles from "../../components/Nav/styles.module.scss";
import Axios from "axios";

const groupBy = (list, key) => {
    return list.reduce((result, item) => {
      const year = item[key];
      (result[year] = result[year] || []).push(item);
      return result;
    }, {});
  };

const Navigation = () => {

    const getBookData = async (genre) => {
    const books = [];
    const bookListAPI = `https://openlibrary.org/subjects/${genre}.json`;
    const bookListAPIResponse = await Axios.get(bookListAPI);
    const bookList = bookListAPIResponse.data.works;
    bookList.forEach((book) => {
      const bookToRender = {
         title: book.title,
         authors: book.authors,
         cover_url:  `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg` ,
         first_publish_year: book.first_publish_year ,
         cover_id: book.cover_id ,
       };
      books.push(bookToRender);
    });

    const groupedBooks = groupBy(books, "first_publish_year");
    const years = Object.keys(groupedBooks).sort((year1, year2) => year2 - year1);
    const bookData = years.map((year) => ({ year, books: groupedBooks[year] }));
    setBookList(bookData);

  };
    
    
return (
 <div className={styles.container}> 
   <div className={styles.navContainer}>
     <div className={styles.bookNavigationContainer}>
       <h1 className={styles.descriptionTitle}>
         Simple Book List Maker by Irina S.
       </h1>
      <p className={styles.paragraph}>
        This is a project that displays books based on the genre and when
        clicked it retrieves the list of books for that genre.
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
    </nav>
   </div>
  </div>
)}
     
export default Navigation;   