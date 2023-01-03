import React from "react";
import styles from '../../SidePanel/Nav/styles.module.scss';

export const Home = () => {
    return (
      <div className={styles.list}>
        <button className={styles.navListItem1} type="button">cooking</button> 
        <button className={styles.navListItem2} type="button">horror</button>
        <button className={styles.navListItem3} type="button">fantasy</button>
        <button className={styles.navListItem4} type="button">mystery</button>
        <button className={styles.navListItem5} type="button">personal development</button>
        <button className={styles.navListItem6} type="button">romance</button>
        <button className={styles.navListItem7} type="button">sci-fi</button>
      </div>
    )
}

export default Home;
