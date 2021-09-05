import React from "react";
import {connect} from "react-redux";
import NewsPage from "./NewsPage";

let mapStateToProps = (state) => {
    return {

    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

console.log(window.location.href)

const NewsPageContainer = connect(mapStateToProps, mapDispatchToProps)(NewsPage);
export default NewsPageContainer;