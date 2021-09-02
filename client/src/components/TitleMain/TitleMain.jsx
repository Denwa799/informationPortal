import React from "react";
import styles from "./TitleMain.module.css"

const TitleMain = (props) => {
    let titleElements = props.titles.map(title => <h1 className={styles.blockTitle}>{title.title}</h1>);
    let caseTitle;

    switch (props.section.section) {
        case "sochi":
            caseTitle = titleElements[1];
            break;
        case "krasnodarTerritory":
            caseTitle = titleElements[2];
            break;
        default:
            caseTitle = titleElements[0];
    }

    return (
        <div className={styles.container}>
            {caseTitle}
        </div>
    );
};

export default TitleMain;