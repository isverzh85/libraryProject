import React, {useState} from "react";
import BookListContext from "./BookListContext";

const BookListProvider = ({ children }) => {
  const [bookList, setBookList] = useState([]);

  const addBookToList = ({title, authors, cover_id, first_publish_year}) => {
    const newBook = {
      title, 
      authors, 
      cover_url: `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg`,
      first_publish_year,
      cover_id
    };
    setBookList([...bookList, {...newBook, id: bookList.length + 1}]);
  };

  const deleteBookFromList = (bookId) => {
        const updatedBookList = bookList.filter((book) => book.key !== bookId);
        setBookList(updatedBookList);
      };

      return (
        <BookListContext.Provider value={{bookList, setBookList, addBookToList, deleteBookFromList}}>
            {children}
        </BookListContext.Provider>

      )
 };


 export default BookListProvider; 

