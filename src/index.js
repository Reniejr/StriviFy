import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

//REDUX
import { Provider } from 'react-redux';
import createStore from './_STORE'

//PERSONAL COMPONENTS IMPORTS
import RouterWeb from './__COMPONENTS/__MAIN/1.RouterWeb/RouterWeb';

//REDUX

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore}>
      <RouterWeb/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
