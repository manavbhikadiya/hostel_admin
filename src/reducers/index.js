import { combineReducers } from "redux";
import { adminReducer,adminDataReducer } from "./adminReducer";

const rootReducers = combineReducers({
    adminReducer,
    adminDataReducer
})
export default rootReducers;