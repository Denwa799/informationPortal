import React from "react";
import NewsMain from "./NewsMain";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NewsMainContainer = connect(mapStateToProps, mapDispatchToProps)(NewsMain);

export default NewsMainContainer;