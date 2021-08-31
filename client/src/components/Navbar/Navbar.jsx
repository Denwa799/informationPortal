import React from "react";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div>AllNews</div>
                <div>Главная</div>
                <div>Новости</div>
                <div>Игры</div>
                <div>Аниме</div>
            </div>
        </div>
    );
};

export default Navbar;