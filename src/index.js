import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Store/store';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';
import toast, { Toaster } from 'react-hot-toast';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
