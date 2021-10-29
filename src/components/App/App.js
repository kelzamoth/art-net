import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import DialogsContainer from '../Navbar/Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import News from '../Navbar/News/News';
import Art from '../Navbar/Art/Art';
import Settings from '../Navbar/Settings/Settings';
import UsersContainer from '../Navbar/Users/UsersContainer';
import ProfileContainer from "../Navbar/Profile/ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer";
import LoginContainer from "../Navbar/Login/LoginContainer";


const App = (props) => {
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
          <Route path='/dialogs' render={() =>  <DialogsContainer />}/>
          <Route path='/users' render={() => <UsersContainer /> }/>
          <Route path='/news' render={News} />
          <Route path='/art' render={Art} />
          <Route path='/settings' render={Settings} />
          <Route path='/login' render={() => <LoginContainer />} />
        </div>
      </div>
  )
}

export default App;
