import React from "react";
import TitleMain from "./TitleMain";
import {connect} from "react-redux";

let mapStateToProps = (state, section) => {
    return {
        titles: state.titleMain.titles,
        section: section,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const TitleMainContainer = connect(mapStateToProps, mapDispatchToProps)(TitleMain);

export default TitleMainContainer;