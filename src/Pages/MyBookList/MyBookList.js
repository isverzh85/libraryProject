import React, { useContext } from "react";
import styles from "../MyBookList/styles.module.scss";
import { MyAddedBookListContext } from '../../context/BookList/MyBookListContext';

export const MyBookList = () => {

  const { myAddedBookList } = useContext(MyAddedBookListContext);

  return (
    <div>
      {myAddedBookList?.map((book, index) => {
        return (
          <div key={index}>
            <h1>My book list</h1>
            <h2>{book.title}</h2>
            <p>{book.authors}</p>
            <img src={book.cover_url} alt={book.title} />
          </div>
        );
      })}
    </div>
  );
  
};

export default MyBookList;

