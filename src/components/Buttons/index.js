import React from "react";
import style from '../../Layout/SidePanel/Nav/styles.module.scss'
import { useState, useEffect } from 'react';
import Axios from 'axios';

export const Button = ({
  children,
  type,
  className,
  onClick,
  
}) => {
  const [cover, setCover] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();

  const fetchData = () => {
    const coverAPI = 'https://covers.openlibrary.org/b/$key/$value-$size.jpg';
    const titleAPI = 'https://openlibrary.org/isbn/9780140328721.json';
    const authorAPI = 'https://openlibrary.org/authors/OL23919A.json';

    const getCoverAPI = Axios.get(coverAPI)
    const getTitleAPI = Axios.get(titleAPI)
    const getAuthorAPI = Axios.get(authorAPI)
    Axios.all(getCoverAPI, getTitleAPI, getAuthorAPI).then(
      Axios.spread((...allData) => {
          const allDataCover = allData[0].data.name;
      })
    )
  }

  useEffect(() => {
    fetchData();
  }, []);


  const getFetchBookList = () => {
    Axios.get('https://openlibrary.org/authors/OL23919A.json').then((res) =>{
    console.log(res)
    setAuthor(res.data.author)
    console.log(res)
  });
}

  return (
    <div className="books">
      <button className={className} onClick={fetchData} type={type}>{children}</button> 
      {author && author.map((list) => ( 
       <div className="bookList">
          <h2>{list?.cover}</h2>  
          <h2>{list?.title}</h2>
          <h2>{list?.name}</h2>
      </div>
      ))}
     </div>
  )
} 

export default Button 
