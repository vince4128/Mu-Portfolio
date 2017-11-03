import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

require("../style/style.scss");

import App from './components/app';

ReactDOM.render(
    <App />, document.querySelector('.container')
  );
  
require('../assets/img/img1.jpg');
require('../assets/img/img2.jpg');
require('../assets/img/img3.jpg');
require('../assets/img/img4.jpg');