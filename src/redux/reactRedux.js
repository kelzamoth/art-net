import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogPageReducer from "./dialogPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers ({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;
export default store;