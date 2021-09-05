import React from "react";
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {ANIMENEWS_ROUTE, GAMENEWS_ROUTE, MAIN_ROUTE, NEWS_ROUTE} from "../../utils/consts";

const Navbar = (props) => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <NavLink className={styles.link} to={MAIN_ROUTE}>AllNews</NavLink>
                <NavLink className={styles.link} activeClassName={styles.active} to={MAIN_ROUTE} exact={true}>Главная</NavLink>
                <NavLink className={styles.link} activeClassName={styles.active} to={NEWS_ROUTE}>Новости в мире</NavLink>
                <NavLink className={styles.link} activeClassName={styles.active} to={GAMENEWS_ROUTE}>Игровые новости</NavLink>
                <NavLink className={styles.link} activeClassName={styles.active} to={ANIMENEWS_ROUTE}>Аниме новости</NavLink>
            </div>
        </div>
    );
};

export default Navbar;