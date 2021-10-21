import React from 'react';
import {connect} from "react-redux";
import {login} from "../../../redux/authReducer";
import Login from "./Login";



const mapStateToProps =(state) => ({
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password, rememberMe) => {
            dispatch(login(email, password, rememberMe))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Login);