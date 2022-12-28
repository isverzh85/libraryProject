import React from "react";
import style from '../../Layout/SidePanel/Nav/styles.module.scss'
import { useState, useEffect } from 'react';
import Axios from 'axios';

export const Button = ({
  children,
  type,
  className,
  genre,
  res,
  onClick,
  
}) => {
  const [subjects, setSubjects] = useState();

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
    <div className={style.container}>
      <div className={style.genreSubject}>
        {subjects && subjects.map(() => {
           return (
              <button className={className} onClick={() => setSubjects.data} type={type}>{children}</button>                             
            )
          })}
      </div>
  </div>
)}
export default Button 