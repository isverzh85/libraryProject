import React from "react";
import styles from '../../SidePanel/Nav/styles.module.scss';
import { useState, useEffect } from 'react';
import Axios from 'axios';

export const Nav = ({
  genre,
  
}) => {

  const [bookLists, setBookList] = useState([]);
  
  const getBookData = async () => {
    const bookListAPI = `https://openlibrary.org/subjects/${genre}.json`;
    const bookListAPIResponse = await Axios.get(bookListAPI)
    setBookList(bookListAPIResponse.data);
    console.log(bookListAPIResponse)
  };

  useEffect(() => {
     getBookData()
  }, []);
  
    return (
      <div className={styles.list}>
        {bookLists.length > 0 && bookLists.map((bookList => {
          return(
            <button className={styles.navListItem1} type="button" onClick={() => getBookData(bookList)}>cooking</button> 
          
          
            )
      }))}

       
        <button className={styles.navListItem2} type="button">horror</button>
        <button className={styles.navListItem3} type="button">fantasy</button>
        <button className={styles.navListItem4} type="button">mystery</button>
        <button className={styles.navListItem5} type="button">personal development</button>
        <button className={styles.navListItem6} type="button">romance</button>
        <button className={styles.navListItem7} type="button">sci-fi</button>
      </div>
    )
}

export default Nav;
