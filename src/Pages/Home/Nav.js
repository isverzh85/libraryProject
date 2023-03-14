import React, { useState, useContext  }  from "react";
import { useHistory } from "react-router-dom"; 
import styles from '../../Pages/Home/styles.module.scss';
import Axios from 'axios';
import cn from 'classnames';
import logo from '../../../src/assets/logo.png';
import { MyAddedBookListContext } from '../../context/BookList/MyBookListContext.js';

const groupBy = (list, key) => {
   return list.reduce((result, item) => {
     (result[item[key]] = result[item[key]] || []).push(item);
     return result;
   }, {});
 };

export const Nav = () => {
    const [bookList, setBookList] = useState([]); 
    const { myAddedBookList } = useContext(MyAddedBookListContext);
       console.log('THIS IS MY CONTEXT:', myAddedBookList);
    const history = useHistory(); 


   const addBookToList = ({title, authors, cover_id, first_publish_year}) => {
      const newBook = {
          title, 
          authors, 
          cover_url: `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg`,
          first_publish_year,
          cover_id
        };
          setBookList((prevBookList) => [
             ...prevBookList,
         { ...newBook, id: prevBookList.length + 1 },
      ]);
      myAddedBookList.dispatch({
         type: 'ADD_BOOK',
         payload: newBook,
      });
    };

    function handleBookListChange(event) {
      const newBookList = [...bookList]; 
      const bookIndex = parseInt(event.target.value);
      const selectedBook = newBookList[bookIndex];
      newBookList.splice(bookIndex, 1);
      setBookList(newBookList);
      history.push('/my-book-list');

    }

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
      
   
   if (bookData.length > 0 && bookData[0].books.length > 0) {
      const firstBook = bookData[0].books[0];
      addBookToList({
        title: firstBook.title,
        authors: firstBook.authors,
        cover_id: firstBook.cover_id,
        first_publish_year: firstBook.first_publish_year,
      });
    }
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
               <img src={logo} alt="logo" className={styles.logo}/>
               <button type="button" className={cn(styles.navButton, styles.separateNav)} onClick={handleBookListChange}>View my book list</button>  
               
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
                     <button className={styles.bookButton}  onClick={() => handleBookListChange(book)} >+</button> 
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