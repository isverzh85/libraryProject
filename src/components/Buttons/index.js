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
    setSubjects(subjectAPIResponse);
  }

  useEffect(() => {
    fetchData(`https://openlibrary.org/subjects/${genre}.json`).then(res);
  }, []);

  return (
    <div className={style.container}>
        <button className={className} onClick={fetchData} type={type}>{children}</button> 

      <div className={style.genreSubject}>
        {subjects && subjects.map((genreSubject) => {
           return subjects.map((index) => {
             return (
                 <ul className="genre">
                   <li><Button key={index} genre={genre.data.cooking} onClick={subjects}>{children}</Button></li>
                    <li><Button key={index} genre={genre.horror} onClick={fetchData}>{children}</Button></li>
                   <li><Button key={index} genre={genre.fantasy} onClick={fetchData}>{children}</Button></li>
                   <li><Button key={index} genre={genre.mystery} onClick={fetchData}>{children}</Button></li>
                   <li><Button key={index} genre={genre.personaldevelopment} onClick={fetchData}>{children}</Button></li>
                   <li><Button key={index} genre={genre.romance} onClick={fetchData}>{children}</Button></li>
                   <li><Button key={index} genre={genre.sciFi} onClick={fetchData}>{children}</Button></li> 
                 </ul>           
               )
             })
           })}
        </div>
     </div>
  )}
export default Button 