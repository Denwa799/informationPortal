import newsReducer from "./news-reducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
   newsPage: newsReducer,
});

const store = createStore(reducers);

export default store;