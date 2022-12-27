import React from "react";
import Button from '../../../components/Buttons/index';
import styles from '../../SidePanel/Nav/styles.module.scss';

export const Home = () => {
    return (
      <div className={styles.list}>
        <nav>
             <ul className={styles.navSidePanel}>
             <li><Button className={styles.navListItem1} genre="cooking">cooking</Button></li>
             <li><Button className={styles.navListItem2} genre="horror">horror</Button></li>
             <li><Button className={styles.navListItem3} genre="fantasy">fantasy</Button></li>
             <li><Button className={styles.navListItem4} genre="mystery">mystery</Button></li>
             <li><Button className={styles.navListItem5} genre="personal development">personal development</Button></li>
             <li><Button className={styles.navListItem6} genre="romance">romance</Button></li>
             <li><Button className={styles.navListItem7} genre="sci-fi">sci-fi</Button></li>
            </ul>
        </nav>
      </div>
    )
}

export default Home;
