import React from "react";
import styles from "./NewsItem.module.css";
import {NavLink} from "react-router-dom";
import {NEWS_ROUTE} from "../../../../utils/consts";

const NewsItem = (props) => {
    return (
        <NavLink to={NEWS_ROUTE + "/" + props.id} className={styles.item}>
            <h1>{props.title}</h1>
            <img src={props.img} alt="Фото анонса"/>
            <p>{props.preview}</p>
        </NavLink>
    );
};

export default NewsItem;