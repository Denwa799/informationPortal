import React from "react";
import styles from "./NewsMain.module.css"
import NewsItem from "./NewsItem/NewsItem";

const NewsMain = (props) => {

    let newsElements = props.news.map(item => <NewsItem title={item.title}
                                                        id={item.id}
                                                        preview={item.preview}
                                                        img={item.img}
                                                        section={item.section}
                                                        region={item.region}/>);

    let news;

    debugger;
    if (props.section != null) {
        switch (props.section) {
            case "sochi":
                news = newsElements.filter(news => news.props.section === "sochi");
                break;
            case "krasnodar":
                news = newsElements.filter(news => news.props.section === "krasnodar");
                break;
            case "moscow":
                news = newsElements.filter(news => news.props.section === "moscow");
                break;
            default:
                news = newsElements;
        }
    } else if (props.region != null && !props.section) {
        switch (props.region) {
            case "krasnodarTerritory":
                news = newsElements.filter(news => news.props.region === "krasnodarTerritory");
                break;
            case "moscowTerritory":
                news = newsElements.filter(news => news.props.region === "moscowTerritory");
                break;
            default:
                news = newsElements;
        }
    }

    debugger;


    return (
        <div>
            <div className={styles.container}>
                <div className={styles.news}>
                    {news}
                </div>
            </div>
        </div>

    );
};

export default NewsMain;