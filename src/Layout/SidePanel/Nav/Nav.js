import React from "react";
import styles from '../../SidePanel/Nav/styles.module.scss';
import { useState,  useContext } from 'react';
import Axios from 'axios';
import cn from 'classnames';
import logo from './logo.png'
import MyBookList from '../../../components/Buttons/MyBookList/MyBookList';
// import { BookListContext } from "../../../context";
// import { BookLists } from "./BookLists";

const groupBy = (list, key) => {
   return list.reduce((result, item) => {
     (result[item[key]] = result[item[key]] || []).push(item);
     return result;
   }, {});
 };


export const Nav = () => {
    const [bookLists, setBookList] = useState([]); 
    const [addBookList, setAddBookList] = useState([]);

    const MyBookListContext = React.createContext();


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

   const handleAddBook = (book) => {
    setAddBookList((prevList) => [...prevList, book]);
  };
  

   
 return (
      <div className={styles.textBoxContainer}>
         <div className={styles.description}>
           <div className={styles.list}>  
            <h1 className={styles.name}>Simple Book List Maker by Irina S. </h1>
            <p className={styles.paragraph}>This is a project that displays books based on the genre and when clicked it retrieves the list of books for that genre.<br>
                 </br>It is created using <strong>ReactJS</strong> and <strong>OpenLibraryAPI</strong>.</p>
                 </div>
         <div>
            <nav className={styles.listButtons}>        
               <button type="button" className={cn(styles.navButton, styles.navListItem1)} onClick={() => getBookData('cooking')}>cooking</button> 
               <button type="button" className={cn(styles.navButton, styles.navListItem2)} onClick={() => getBookData('horror')}>horror</button>
               <button type="button" className={cn(styles.navButton, styles.navListItem3)} onClick={() => getBookData('fantasy')}>fantasy</button>
               <button type="button" className={cn(styles.navButton, styles.navListItem4)} onClick={() => getBookData('mystery')}>mystery</button>
               <button type="button" className={cn(styles.navButton, styles.navListItem5)} onClick={() => getBookData('personal_development')}>personal development</button>
               <button type="button" className={cn(styles.navButton, styles.navListItem6)} onClick={() => getBookData('romance')}>romance</button>
               <button type="button" className={cn(styles.navButton, styles.navListItem7)} onClick={() => getBookData('sci-fi')}>sci-fi</button>
               <a href ="/my-book-list">
               <img src={logo} alt="logo" className={styles.logo}/>
               <button type="button" className={cn(styles.navButton, styles.separateNav)}>View my book list</button>  
               </a>
            </nav>  
         </div>
      </div>
      {/* <BookListContext.Provider value={bookLists}> */}
 {/* <BookLists> */}

 {/* </BookLists> */}
            
      {/* </BookListContext.Provider> */}
    </div>
 )};
 
export default Nav;