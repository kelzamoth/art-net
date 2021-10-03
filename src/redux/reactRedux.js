import { combineReducers, createStore } from "redux";
import dialogPageReducer from "./dialogPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers ({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);
window.store = store;
export default store;