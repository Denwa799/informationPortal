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
            <NewsMainContainer/>
            <NewsMainContainer/>

            <TitleMainContainer section="krasnodarTerritory"/>
            <NewsMainContainer/>
            <NewsMainContainer/>
        </div>
    );
}

export default App;
