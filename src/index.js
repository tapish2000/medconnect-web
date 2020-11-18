import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger';
import reducer from './store/reducer'
import ReactDOM from 'react-dom';
import sagas from './sagas'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware=createSagaMiddleware();

const store= createStore(reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);
ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
