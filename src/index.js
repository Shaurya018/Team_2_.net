import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import { Provider } from "react-redux";
import { createStore } from "redux";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import reducers from "./reducers";


import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
</Provider>,
  document.getElementById('root')
);
