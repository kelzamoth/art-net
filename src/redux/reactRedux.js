import { combineReducers, createStore } from "redux";
import dialogPageReducer from "./dialogPageReducer";
import profilePageReducer from "./profilePageReducer";

let reducers = combineReducers ({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer
})

let store = createStore(reducers);



export default store;