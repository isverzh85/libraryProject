import React, {useState} from "react";
import BookListContext from "./BookListContext";


const BookListProvider = ({ children }) => {
  const [bookList, setBookList] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);



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
    setSelectedBook(newBook);
    setBookList([newBook]);

   };

  const deleteBookFromList = (bookId) => {
        const updatedBookList = bookList.filter((book) => book.id !== bookId);
        setBookList(updatedBookList);
      };

  return (
    <BookListContext.Provider value={{bookList, setBookList, addBookToList, deleteBookFromList}}>
            {children}
    </BookListContext.Provider>
      )
 };

 export default BookListProvider; 
