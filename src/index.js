import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
//redux-thunk checks if an action returns a function instead of an object
import './index.css';
import App from './containers/App';
import { textFieldReducer, requestAPIreducer } from './reducers';
import reportWebVitals from './reportWebVitals';

const logger = createLogger();
// const store = createStore(rootReducer); 
//all reducers -> root reducer, but we have one reducer so:
const rootReducer = combineReducers({ textFieldReducer, requestAPIreducer }); //ES6 syntax:
//= { textFieldReducer: textFieldReducer, equestAPIreducer: equestAPIreducer } //Pre  ES6
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

//Provider will take care of passing store to sub components
ReactDOM.render(
  <React.StrictMode>
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
