import React from "react";
import cn from "classnames";
import styles from "../../Pages/Home/styles.module.scss";
import logo from "../../../src/assets/logo.png";


function Navigation(props) {
    const { genres, getBookData, viewBookList } = props;
    return (
        <div className={styles.navContainer}>
          <div className={styles.bookNavigationContainer}>
            <div className={styles.descriptionContainer}>
              <div className={styles.descriptionWrapper}>
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
                {genres.map((genre, index) => (
                  <button
                    type="button"
                    key={index}
                    className={cn(styles.navButton, styles[`navListItem${index + 1}`])}
                    onClick={() => getBookData(genre)}
                  >
                    {genre}
                    </button>
            ))}
            <div className={styles.viewButton}>
              <button
                type="button"
                className={cn(styles.navButton, styles.separateNav)}
                onClick={viewBookList}
              >
                <img src={logo} alt="logo" className={styles.logo} />
                View my book list
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navigation;  