import React from 'react';
import ReactDOM from 'react-dom/client';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware, getDefaultMiddleware, compose} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import './index.css';
import reportWebVitals from './reportWebVitals';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

 
import {reducer} from './thunkapp/reducers/index';
import MainReduxThunkComponent from './thunkapp/mainreduxthunkcomponent';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';


//const middleware = compose(applyMiddleware(thunk));
const middleware = [...getDefaultMiddleware()];

const store = configureStore({
   reducer:reducer,
   middleware
});



 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Provider store={store}>
     <MainReduxThunkComponent></MainReduxThunkComponent>
     </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
