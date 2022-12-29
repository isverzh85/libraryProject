import React from "react";
import style from '../../Layout/SidePanel/Nav/styles.module.scss'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Button from '../../Layout/SidePanel/Nav/styles.module.scss'

export const ButtonFeature = ({
  children,
  type,
  className,
  genre,
  res,
  onClick,
  
}) => {

  const [subjects, setSubjects] = useState([]);
  
  const fetchData = async () => {
    const subjectsAPI = `https://openlibrary.org/subjects/${genre}.json`;
    const subjectAPIResponse = await Axios.get(subjectsAPI)
    setSubjects(subjectAPIResponse.data.works);
    console.log(subjectAPIResponse)
  }

  useEffect(() => {
     fetchData(`https://openlibrary.org/subjects/${genre}.json`).then(res)
  }, []);

  return (
    <div>
       <ul style={style.navList}>
         {subjects.map((genre) => {
           return (
             <li key={genre}>
             <Button className={className} type={type} onClick={genre}>{children}</Button>
             </li>
          )}
        )
       </ul>
    </div>
  ))     
}
export default ButtonFeature 