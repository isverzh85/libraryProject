import React, { createContext, useState } from 'react';

export const MyAddedBookListContext = createContext({
    myAddedBookList: "Test2"
  });

  const MyAddedBookListProvider = ({ children }) => {
  const [books, setBook] = useState([]);
  const addBookToList = ({title, authors, cover_id, first_publish_year}) => {
    setBook([...books, {title, authors, cover_id,first_publish_year}])
  }
  const removeBookFromList = (book) => {
    setBook(books.filter(book ))
  };
  return (
     <MyAddedBookListContext.Provider value={{books, setBook, addBookToList, removeBookFromList}}>
                {children}
       </MyAddedBookListContext.Provider>
     )
}    

export default MyAddedBookListContext; 