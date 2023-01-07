import React from "react";
import styles from '../../SidePanel/Nav/styles.module.scss';
import { useState } from 'react';
import Axios from 'axios';

export const Nav = () => {

  const [bookLists, setBookList] = useState([]); 
  const getBookData = async (genre) => {
    const bookListAPI = `https://openlibrary.org/subjects/${genre}.json`;
    const bookListAPIResponse = await Axios.get(bookListAPI)
    setBookList(bookListAPIResponse.data.works);
  };

 return (
      <div className={styles.list}>
         {bookLists.length > 0 && bookLists.map((book => {
            return (
             <div>             
                {book.title}
             </div>
              )
            })
        )}
      <div>
          <button type="button" className={styles.navListItem1} onClick={() => getBookData('cooking')}>cooking</button> 
          <button type="button" className={styles.navListItem2} onClick={() => getBookData('horror')}>horror</button>
          <button type="button" className={styles.navListItem3} onClick={() => getBookData('fantasy')}>fantasy</button>
          <button type="button" className={styles.navListItem4} onClick={() => getBookData('mystery')}>mystery</button>
          <button type="button" className={styles.navListItem5} onClick={() => getBookData('personal development')}>personal development</button>
          <button type="button" className={styles.navListItem6} onClick={() => getBookData('romance')}>romance</button>
          <button type="button" className={styles.navListItem7} onClick={() => getBookData('sci-fi')}>sci-fi</button>
       </div>
    </div>
 )};
 
export default Nav;
