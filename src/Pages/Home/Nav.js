import React, { useState, useContext  }  from "react";
import { useHistory } from "react-router-dom"; 
import styles from '../../Pages/Home/styles.module.scss';
import Axios from 'axios';
import cn from 'classnames';
import logo from '../../../src/assets/logo.png';
import { BookListContext } from '../../context/BookList/BookListContext';

const groupBy = (list, key) => {
   return list.reduce((result, item) => {
     (result[item[key]] = result[item[key]] || []).push(item);
     return result;
   }, {});
 };

export const Nav = () => {
    const [bookList, setBookList] = useState([]); 
    const [addBookList, setAddBookList] = useState([]);
    const {bookList, setBookListContext, addBookToList} = useContext(BookListContext);
    const history = useHistory(); 

    console.log(bookList)

    const getBookData = async (genre) => {
    let books = [];
    const bookListAPI = `https://openlibrary.org/subjects/${genre}.json`;
    const bookListAPIResponse = await Axios.get(bookListAPI)
    const bookList = bookListAPIResponse.data.works;
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
      setBookList(bookData);
      
   }





   function getAuthorNames(book) {
      const authors = book.authors?.map(author => author.name);
      const uniqueAuthors = [...new Set(authors)];
      return uniqueAuthors.length > 0 ? uniqueAuthors.join(', ') : 'Unknown Author';
   }
    
return (

   <div className={styles.textBoxContainer}>
      <div className={styles.description}>
          <div className={styles.list}>  
            <h1 className={styles.name}>Simple Book List Maker by Irina S. </h1>
            <p className={styles.paragraph}>This is a project that displays books based on the genre and when clicked it retrieves the list of books for that genre.<br>
             </br>It is created using <strong>ReactJS</strong> and <strong>OpenLibraryAPI</strong>.</p>
      </div>
        <div className = {styles.bookListContainer}>
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
          <div className={styles.listBook}>
              {bookList?.length > 0 && bookList?.map((book, index) => {
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
                  ) :  (<div className={styles.bookCoverContainer}></div>
               )} 
                </div>
                     <button className={styles.bookButton}  onClick={() => addBookToList(book)} >+</button> 
                <div className={styles.title}>{book.title} </div>
                   {book.authors?.map((author) => {
                        return (
                           <div className={styles.author}>{getAuthorNames(book)}</div>

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
 )};
   
export default Nav;