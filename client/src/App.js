import React from "react";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import NewsMainContainer from "./components/News/NewsMain/NewsMainContainer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <NewsMainContainer/>
    </div>
  );
}

export default App;
