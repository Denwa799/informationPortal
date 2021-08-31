import React from "react";
import styles from "./NewsItem.module.css";

const NewsItem = (props) => {
    return (
        <div className={styles.item}>
            <h1>{props.title}</h1>
            <img src={props.img} alt="Фото анонса"/>
            <p>{props.preview}</p>
        </div>
    );
};

export default NewsItem;