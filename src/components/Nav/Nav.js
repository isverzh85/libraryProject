import React from "react";
import cn from "classnames";
import styles from "../../components/Nav/styles.module.scss";

const Navigation = ({ getBookData }) => {
    
return (

<div className={styles.container}>
  <div className={styles.navContainer}>
    <div className={styles.bookNavigationContainer}>
      <h1 className={styles.descriptionTitle}>
        Simple Book List Maker by Irina S.
      </h1>
      <p className={styles.paragraph}>
        This is a project that displays books based on the genre and when
        clicked it retrieves the list of books for that genre.
        <br />
        It is created using <strong>ReactJS</strong> and{" "}
        <strong>OpenLibraryAPI</strong>.
      </p>
    </div>
    <nav className={styles.listButtons}>
      <button
        type="button"
        className={cn(styles.navButton, styles.navListItem1)}
        onClick={() => getBookData("cooking")}
      >
        cooking
      </button>
      <button
        type="button"
        className={cn(styles.navButton, styles.navListItem2)}
        onClick={() => getBookData("horror")}
      >
        horror
      </button>
      <button
        type="button"
        className={cn(styles.navButton, styles.navListItem3)}
        onClick={() => getBookData("fantasy")}
      >
        fantasy
      </button>
      <button
        type="button"
        className={cn(styles.navButton, styles.navListItem4)}
        onClick={() => getBookData("mystery")}
      >
        mystery
      </button>
      <button
        type="button"
        className={cn(styles.navButton, styles.navListItem5)}
        onClick={() => getBookData("personal_development")}
      >
        personal development
      </button>
      <button
        type="button"
        className={cn(styles.navButton, styles.navListItem6)}
        onClick={() => getBookData("romance")}
      >
        romance
      </button>
      <button
        type="button"
        className={cn(styles.navButton, styles.navListItem7)}
        onClick={() => getBookData("sci-fi")}
      >
        sci-fi
      </button>
    </nav>
  </div>
 </div>
)}
     
export default Navigation;   