import React from "react";
import TitleMainContainer from "../components/TitleMain/TitleMainContainer";
import NewsMainContainer from "../components/News/NewsMain/NewsMainContainer";

const Main = () => {
    return (
        <div>
            <TitleMainContainer section="sochi"/>
            <NewsMainContainer section="sochi" region="krasnodarTerritory"/>

            <TitleMainContainer section="krasnodarTerritory"/>
            <NewsMainContainer region="krasnodarTerritory"/>

            <TitleMainContainer section="moscow"/>
            <NewsMainContainer section="moscow" region="moscowTerritory"/>
        </div>
    );
};

export default Main;