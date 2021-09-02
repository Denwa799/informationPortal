import React from "react";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import NewsMainContainer from "./components/News/NewsMain/NewsMainContainer";
import TitleMainContainer from "./components/TitleMain/TitleMainContainer";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <TitleMainContainer section="sochi"/>
            <NewsMainContainer section="sochi" region="krasnodarTerritory"/>

            <TitleMainContainer section="krasnodarTerritory"/>
            <NewsMainContainer section="" region="krasnodarTerritory"/>

            <TitleMainContainer section="moscow"/>
            <NewsMainContainer section="moscow" region="moscowTerritory"/>
        </div>
    );
}

export default App;
