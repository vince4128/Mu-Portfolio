import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

require("../style/style.scss");

import App from './components/app';

ReactDOM.render(
    <App />, document.querySelector('.container')
  );
  