import React from "react";
import Button from '../../../components/Buttons/index';
import styles from '../../SidePanel/Nav/styles.module.scss';

export const Home = () => {
    return (
      <div className={styles.navSidePanelContainer}>
        <nav>
             <ul className={styles.navSidePanel}>
             <li><Button className={styles.navListItem1}>cooking</Button></li>
             <li className={styles.navListItem2}><Button>horror</Button></li>
             <li className={styles.navListItem3}><Button>fantasy</Button></li>
            
             <li className={styles.navListItem4}><Button>mystery</Button></li>
             <li className={styles.navListItem5}><Button>personal development</Button></li>
             <li className={styles.navListItem6}><Button>romance</Button></li>
             <li className={styles.navListItem7}><Button>sci-fi</Button></li>
            </ul>
        </nav>
      </div>
    )
}

export default Home;
