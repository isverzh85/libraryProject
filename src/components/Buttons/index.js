import React from "react";
import style from '../../Layout/SidePanel/Nav/styles.module.scss'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Button from '../../Layout/SidePanel/Nav/Nav'

export const ButtonFeature = ({
  children,
  type,
  className,
  genre,
  bookList,
  res,
  onClick,
  
}) => {

  const [bookLists, setBookList] = useState([])
  
  const getBookData = async () => {
    const bookListAPI = `https://openlibrary.org/subjects/${genre}.json`;
    const bookListAPIResponse = await Axios.get(bookListAPI)
    setBookList(bookListAPIResponse.data);
    console.log(bookListAPIResponse)
  }

  useEffect(() => {
     getBookData()
  }, []);

  return (
    <div classname={style.navBookPage}>
          {bookLists.map((bookList => {
             return(
               <button key={bookList.id} onClick={bookLists}>{children}
                 </button>
             )
          }))}
      </div>
  )}    
  

export default ButtonFeature 