import React, {useState, useContext} from "react";
import styles from './styles.module.scss';
import cn from 'classnames';
import logo from '../../assets/logo.png';
import BookListIndexContext from '../../components/BookListIndex/index';

export const Nav = ({getBookData}) => {
   const [bookLists, handleAddBook] = useContext(BookListIndexContext);

    
    const handleButtonClick = (genre) => {
      getBookData(genre);
  };
  
 return (
     <BookListIndexContext.Provider value={{ bookLists, handleAddBook }}>
          <div className={styles.textBoxContainer}>
            <div className={styles.description}>
               <div className={styles.list}>  
            <h1 className={styles.name}>Simple Book List Maker by Irina S. </h1>
            <p className={styles.paragraph}>This is a project that displays books based on the genre and when clicked it retrieves the list of books for that genre.<br>
                 </br>It is created using <strong>ReactJS</strong> and <strong>OpenLibraryAPI</strong>.</p>
                 </div>
         <div>
            <nav className={styles.listButtons}>        
               <button type="button" className={cn(styles.navButton, styles.navListItem1)} onClick={() => getBookData('cooking')}>cooking</button> 
               <button type="button" className={cn(styles.navButton, styles.navListItem2)} onClick={() => getBookData('horror')}>horror</button>
               <button type="button" className={cn(styles.navButton, styles.navListItem3)} onClick={() => getBookData('fantasy')}>fantasy</button>
               <button type="button" className={cn(styles.navButton, styles.navListItem4)} onClick={() => getBookData('mystery')}>mystery</button>
               <button type="button" className={cn(styles.navButton, styles.navListItem5)} onClick={() => getBookData('personal_development')}>personal development</button>
               <button type="button" className={cn(styles.navButton, styles.navListItem6)} onClick={() => getBookData('romance')}>romance</button>
               <button type="button" className={cn(styles.navButton, styles.navListItem7)} onClick={() => getBookData('sci-fi')}>sci-fi</button>
               <a href ="/my-book-list">
               <img src={logo} alt="logo" className={styles.logo}/>
               <button type="button" className={cn(styles.navButton, styles.separateNav)}>View my book list</button>  
               </a>
            </nav>  
         </div>
      </div>   
    </div>

</BookListIndexContext.Provider>
 )};
 
export default Nav;