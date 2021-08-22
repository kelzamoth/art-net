import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Navbar/Profile/Profile';
import DialogsContainer from '../Navbar/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import News from '../Navbar/News/News';
import Art from '../Navbar/Art/Art';
import Settings from '../Navbar/Settings/Settings';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile'  render={() => <Profile store={props.store} />}/>
          <Route path='/dialogs' render={() =>  <DialogsContainer store={props.store} />}/>
          <Route path='/news' render={News} />
          <Route path='/art' render={Art} />
          <Route path='/settings' render={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App;
