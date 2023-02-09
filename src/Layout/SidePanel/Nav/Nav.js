import React from "react";
import styles from '../../SidePanel/Nav/styles.module.scss';
import { useState } from 'react';
import Axios, { all } from 'axios';
import cn from 'classnames'

const groupBy = (list, key) => {
   return list.reduce((result, item) => {
     (result[item[key]] = result[item[key]] || []).push(item);
     return result;
   }, {});
 };

export const Nav = () => {
    const [bookLists, setBookList] = useState([]); 

    const getBookData = async (genre) => {
    let books = [];
    const bookListAPI = `https://openlibrary.org/subjects/${genre}.json`;
    const bookListAPIResponse = await Axios.get(bookListAPI)
    let bookList = bookListAPIResponse.data.works;

    bookList.forEach((book) => { 
    let bookToRender = {
        title:book.title, 
        authors:book.authors, 
        cover_url: `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`,
        first_publish_year: book.first_publish_year,
        cover_id: book.cover_id
      }
        books.push(bookToRender)
   });

   let groupedBooks = groupBy(books, 'first_publish_year');
   let years = Object.keys(groupedBooks).sort((year1, year2) => year2 - year1);
   let bookData = years.map(year => ({ year, books: groupedBooks[year] }));

      setBookList(bookData)
   }

 return (
         <div className={styles.list}>  
            <nav className={styles.listButtons}>
               <button type="button" className={cn(styles.navButton, styles.navListItem1)} onClick={() => getBookData('cooking')}>cooking</button> 
               <button type="button" className={cn(styles.navButton, styles.navListItem2)} onClick={() => getBookData('horror')}>horror</button>
               <button type="button" className={cn(styles.navButton, styles.navListItem3)} onClick={() => getBookData('fantasy')}>fantasy</button>
               <button type="button" className={cn(styles.navButton, styles.navListItem4)} onClick={() => getBookData('mystery')}>mystery</button>
               <button type="button" className={cn(styles.navButton, styles.navListItem5)} onClick={() => getBookData('personal_development')}>personal development</button>
               <button type="button" className={cn(styles.navButton, styles.navListItem6)} onClick={() => getBookData('romance')}>romance</button>
               <button type="button" className={cn(styles.navButton, styles.navListItem7)} onClick={() => getBookData('sci-fi')}>sci-fi</button>
               <div className={styles.text}>uses OpenLibrary API</div>
            </nav>

            <div className={styles.listBook}>
                {bookLists?.length > 0 &&
                bookLists?.map((book, index) => {

            return (
              <div className={styles.mainContainer}>
                  <h2 className={styles.year}>{book.year}</h2>
              <div className={styles.listOfBooks}>
                   {book.books?.map((book, index) => {
                  return (
                    <div className={styles.bookContainer}>
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
    </div>
 )};
 
export default Nav;