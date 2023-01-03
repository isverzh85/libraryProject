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

  const [bookLists, setBookList] = useState([]);
  
  const getBookData = async () => {
    const bookListAPI = `https://openlibrary.org/subjects/${genre}.json`;
    const bookListAPIResponse = await Axios.get(bookListAPI)
    setBookList(bookListAPIResponse.data);
    console.log(bookListAPIResponse)
  };

    if (bookLists.length >= 0) {
       setBookList("List of books will show");
       return true
    }else{
      setBookList(undefined);
      return false
    }
  }

 

  useEffect(() => {
     getBookData()
  }, []);

  

  return (
    <div classname={style.navBookPage}>
          {bookLists.map((bookList => {
             return(
               <Button key={bookList.id} onClick={getBookData.data.works}>{children}
                 </Button>
             )
          }))}
      </div>

  )}    
        

export default ButtonFeature 