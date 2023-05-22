import { combineReducers } from "redux";
import {reducer} from "./TodoApp/Reducer/reducer"

//combineReducers it combines diffrent reducers
export const rootReducer=combineReducers({
    reducer,
    //more reducer can be added here
})