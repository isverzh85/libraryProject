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
         author:book.authors, 
         cover_url: `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
      }
       books.push(bookToRender)
       console.log(bookToRender)
     })     
     setBookList(books)
  }




  
 return (
      <div className={styles.list}>
         {bookLists.length > 0 && bookLists.map((book => {
           return (
             <div>             
                {book.title}
                {book.authors.map(author => {
                   return(
                      <div>{author.name}</div>
                   )     
                })
              } 
                <img src={book.cover_url} alt="book cover"  />  
             </div>
            )
           })
        )}
      <div className={styles.listButtons}>
          <button type="button" className={styles.navListItem1} onClick={() => getBookData('cooking')}>cooking</button> 
          <button type="button" className={styles.navListItem2} onClick={() => getBookData('horror')}>horror</button>
          <button type="button" className={styles.navListItem3} onClick={() => getBookData('fantasy')}>fantasy</button>
          <button type="button" className={styles.navListItem4} onClick={() => getBookData('mystery')}>mystery</button>
          <button type="button" className={styles.navListItem5} onClick={() => getBookData('personal development')}>personal development</button>
          <button type="button" className={styles.navListItem6} onClick={() => getBookData('romance')}>romance</button>
          <button type="button" className={styles.navListItem7} onClick={() => getBookData('sci-fi')}>sci-fi</button>
       </div>
    </div>
 )};
 
export default Nav;
