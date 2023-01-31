import React from "react";
import styles from '../../SidePanel/Nav/styles.module.scss';
import { useState } from 'react';
import Axios from 'axios';

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
        first_publish_year: book.first_publish_year
      }
        books.push(bookToRender)
        books.sort((book1, book2) => book2.first_publish_year - book1.first_publish_year);
        //put logic for the if and else for the year 
        console.log(book)
    })     
        setBookList(books)
   }
console.log(bookLists)

 return (
         <div className={styles.list}>
            <nav className={styles.listButtons}>
               <button type="button" className={styles.navListItem1} onClick={() => getBookData('cooking')}>cooking</button> 
               <button type="button" className={styles.navListItem2} onClick={() => getBookData('horror')}>horror</button>
               <button type="button" className={styles.navListItem3} onClick={() => getBookData('fantasy')}>fantasy</button>
               <button type="button" className={styles.navListItem4} onClick={() => getBookData('mystery')}>mystery</button>
               <button type="button" className={styles.navListItem5} onClick={() => getBookData('personal_development')}>personal development</button>
               <button type="button" className={styles.navListItem6} onClick={() => getBookData('romance')}>romance</button>
               <button type="button" className={styles.navListItem7} onClick={() => getBookData('sci-fi')}>sci-fi</button>
            </nav>
            <div className={styles.listBook}>  
              {bookLists?.length > 0 && bookLists?.map((book => {
               const year = book.first_publish_year
           return (
             <div className={styles.bookList}>
                <div className={styles.year}>{year}</div>
                <div>
                  <img className={styles.cover} src={book.cover_url} alt="book cover"  />  
                </div>
                  <div className={styles.title}>
                     {book.title}
                   </div>
                    
                       {book.authors?.map(author => {
                         return(
                       <div className={styles.author}>{author.name}</div>
                   )     
                })
              } 
              </div>
            )
           })
        )}
        </div>
  
    </div>
 )};
 
export default Nav;
