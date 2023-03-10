import React, { useState,createContext } from 'react';
import Nav from '../../Pages/Home/Nav';
import styles from './styles.module.scss';
import Axios from 'axios';


export const BookListContext = createContext([]);

const groupBy = (list, key) => {
    return list.reduce((result, item) => {
      (result[item[key]] = result[item[key]] || []).push(item);
      return result;
    }, {});
  };

  export const BookLists = () => {
    const [bookLists, setBookLists] = useState([]);
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
            setBookLists(bookData)

  }  
  return (
      <BookListContext.Provider value={bookLists}>
         <div className={styles.listBook}>

           {bookLists?.length > 0 &&
             bookLists?.map((book, index) => {
    return (
       <div className={styles.mainContainer}>
          <Nav getBookData={getBookData} />
          <h2 className={styles.year}>{book.year}</h2>
       <div className={styles.listOfBooks}>
           {book.books && book.books?.map((book, index) => {
          return (
            <div key={book.id} className={styles.bookContainer}>
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
 </BookListContext.Provider>
 );
};





export default BookListContext;

