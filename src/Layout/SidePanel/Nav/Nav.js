import React from "react";
import styles from '../../SidePanel/Nav/styles.module.scss';
import Button from '../../../components/Buttons/index';

export const Home = () => {
    return (
      <div className={styles.list}>
          <ul className={styles.navSidePanel}>
             <Button className={styles.navListItem1} type="button">cooking</Button>
             <Button className={styles.navListItem2} type="button">horror</Button>
             <Button className={styles.navListItem3} type="button">fantasy</Button>
             <Button className={styles.navListItem4} type="button">mystery</Button>
             <Button className={styles.navListItem5} type="button">personal development</Button>
             <Button className={styles.navListItem6} type="button">romance</Button>
             <Button className={styles.navListItem7} type="button">sci-fi</Button>
            </ul>
      </div>
    )
}

export default Home;
