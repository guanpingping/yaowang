import {createStore,applyMiddleware} from "redux";
import {combineReducers} from "redux-immutable";
import scar from "./reducers/scar"
/*用redux-thunk */
import thunk from "redux-thunk";

/* 这里写划分的reducers模块 */
const reducers = combineReducers({
    scar
})

const store = createStore(reducers,applyMiddleware(thunk));

export default store;