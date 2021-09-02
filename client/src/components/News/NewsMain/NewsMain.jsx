import React from "react";
import styles from "./NewsMain.module.css"
import NewsItem from "./NewsItem/NewsItem";

const NewsMain = (props) => {

    let newsElements = props.news.map(item => <NewsItem title={item.title}
                                                        id={item.id}
                                                        preview={item.preview}
                                                        img={item.img}/>);

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.news}>
                    {newsElements}
                </div>
            </div>
        </div>

    );
};

export default NewsMain;