import React from "react";
import styles from '../../Layout/SidePanel/Nav/styles.module.scss'
import { useState } from 'react';
import Axios from 'axios';

export const Button = ({
  children,
  // styles,
  type,
  classname,
  onClick,
  
}) => {
  const [lists, setLists] = useState("");

  const fetchBookList = () => {
    Axios.get('https://openlibrary.org/authors/OL23919A.json').then((res) =>{
      setLists(res.data.list)
  });
}

//   useEffect(() => {
//     fetchBookList();

  return (
    <div className="books">
      <button className={classname} onClick={fetchBookList} type={type} styles={styles}>{children}</button> 
      {lists.map((list) => ( 
       <div className="bookList">
          <h2>{lists?.cover}</h2>
          <h2>{lists?.title}</h2>
          <h2>{lists?.author}</h2>
      </div>
      ))}
     </div>
  )
} 

export default Button 
