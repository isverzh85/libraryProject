import React, { createContext, useState } from 'react';
import MyBookList from '../../Pages/MyBookList/MyBookList';

export const BookListContext = createContext();

export const BookListProvider = ({ children }) => {
  const [bookList, setBookList] = useState([]);

  const addBookToList = (book) => {
    setBookList([...bookList, {...book, id: bookList.length + 1}]);
  }

  return (
    <BookListContext.Provider value={{bookList, setBookList, addBookToList}}>
        {children}
        <MyBookList addBookToList={addBookToList} myBookList={bookList} />
    </BookListContext.Provider>
  );
};