import { combineReducers } from "redux";
import aerolabReducer from "./aerolabReducer";

export default combineReducers({
    aerolab: aerolabReducer,
});