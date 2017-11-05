import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

require("../style/style.scss");

import App from './components/app';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
   </Provider>
  , document.querySelector('.container')
  );
  
require('../assets/img/img1.jpg');
require('../assets/img/img2.jpg');
require('../assets/img/img3.jpg');
require('../assets/img/img4.jpg');