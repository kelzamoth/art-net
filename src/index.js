import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import store from './redux/reactRedux';

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  )
}; 

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state)
});

renderEntireTree(store.getState());
