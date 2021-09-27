import { combineReducers, createStore } from "redux";
import dialogPageReducer from "./dialogPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers ({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;