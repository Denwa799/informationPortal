import {combineReducers, createStore} from "redux";
import newsReducer from "./news-reducer";
import titleReducer from "./title-reducer";

let reducers = combineReducers({
   newsPage: newsReducer,
   titleMain: titleReducer,
});

const store = createStore(reducers);

export default store;