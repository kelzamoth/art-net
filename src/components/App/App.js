import React, {Component} from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import DialogsContainer from '../Navbar/Dialogs/DialogsContainer';
import {Route, withRouter} from 'react-router-dom';
import News from '../Navbar/News/News';
import Art from '../Navbar/Art/Art';
import Settings from '../Navbar/Settings/Settings';
import UsersContainer from '../Navbar/Users/UsersContainer';
import ProfileContainer from "../Navbar/Profile/ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer";
import LoginContainer from "../Navbar/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "../../redux/appReducer";
import Preloader from "../common/Preloader";



class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={News}/>
                    <Route path='/art' render={Art}/>
                    <Route path='/settings' render={Settings}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
        connect(mapStateToProps,{initializeApp}))(App) ;
