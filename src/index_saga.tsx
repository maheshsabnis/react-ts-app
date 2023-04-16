import React from 'react';
import ReactDOM from 'react-dom/client';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';

import './index.css';
import reportWebVitals from './reportWebVitals';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {reducer} from './sagasapp/reducers/reducers';
import rootSaga from './sagasapp/sagas/rootSaga';
import MainReduxSagaComponent from './sagasapp/components/mainreduxsagacomponent';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
   reducer:reducer,
   middleware: [sagaMiddleware]
});



sagaMiddleware.run(rootSaga); 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <MainReduxSagaComponent></MainReduxSagaComponent>
     </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
