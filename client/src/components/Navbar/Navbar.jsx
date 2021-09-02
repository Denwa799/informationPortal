import React from "react";
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {GAMENEWS_ROUTE, MAIN_ROUTE, NEWS_ROUTE} from "../../utils/consts";

const Navbar = (props) => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <NavLink to={MAIN_ROUTE}>AllNews</NavLink>
                <NavLink to={MAIN_ROUTE}>Главная</NavLink>
                <NavLink to={NEWS_ROUTE}>Новости</NavLink>
                <NavLink to={GAMENEWS_ROUTE}>Игры</NavLink>
                <NavLink to="/animenews">Аниме</NavLink>
            </div>
        </div>
    );
};

export default Navbar;