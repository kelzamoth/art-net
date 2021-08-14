import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import store from './state/state'

export let renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}; 

store.subscrider(renderEntireTree);

renderEntireTree(store.getState());
