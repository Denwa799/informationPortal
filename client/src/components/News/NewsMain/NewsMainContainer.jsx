import React from "react";
import NewsMain from "./NewsMain";
import {connect} from "react-redux";

let mapStateToProps = (state, {section, region}) => {
    return {
        news: state.newsPage.news,
        section: section,
        region: region,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NewsMainContainer = connect(mapStateToProps, mapDispatchToProps)(NewsMain);

export default NewsMainContainer;