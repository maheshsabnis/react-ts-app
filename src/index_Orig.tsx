import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProductComponent from './withhooks/productComponent';
import UseRefComponent from './withhooks/useRefComponent';
import UseCallbackComponent from './withhooks/useCallbackComponent';
import UseEffectComponent from './withhooks/useEffectComponent';

const message = "Hello";

const mydetails = {
  firstName:'Mahesh',
  middleName: 'Rameshrao',
  lastName: 'Sabnis'
};

const technologies = [
   'C#', 'React.js', 'Vuew.js'
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App name={message} profile={mydetails} skills={technologies}/> */}
  <UseEffectComponent></UseEffectComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
