import React, { createContext, useState } from 'react';
import MyBookList from '../../Pages/MyBookList/MyBookList';

export const BookListContext = createContext();

export const BookListProvider = ({ children }) => {
  const [bookList, setBookList] = useState([]);

  const addBookToList = (book) => {
    setBookList([...bookList, book]);
  }

  return (
    <BookListContext.Provider value={{bookList, setBookList}}>
        {children}
        <MyBookList myBookList={bookList} />
    </BookListContext.Provider>
  );
};