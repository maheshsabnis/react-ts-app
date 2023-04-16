import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
 
import { QueryClient, QueryClientProvider } from 'react-query'
import RQueryComponent from './reactquery/rquerycompopnent';
import UseCustomHookReducerComponent from './withhooks/usereducercustomhook';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}>
      <RQueryComponent></RQueryComponent>
    </QueryClientProvider> */}
    <UseCustomHookReducerComponent></UseCustomHookReducerComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
