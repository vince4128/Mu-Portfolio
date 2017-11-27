import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import promise from 'redux-promise'; 

import reducers from './reducers';
import ProjectList from './containers/ProjectList';
import ProjectDetail from './containers/ProjectDetail';
import ProjectSlider from './containers/ProjectSlider';
import Logo from './components/logo';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <HashRouter>
      <section>
        <Switch>
          <Route exact path="/" component={ProjectList} render={function(){alert("coucou")}}/>
          <Route path="/projets/:id/:pid" component={ProjectDetail} render={function(){alert("coucou")}}/>          
          <Route path="/projets/:id" component={ProjectSlider} render={function(){alert("coucou")}}/>
        </Switch>
      </section>
    </HashRouter>
  </Provider>
  , document.querySelector('.container')
  );

require("../style/style.scss");
require('../assets/img/img1.jpg');
require('../assets/img/img2.jpg');
require('../assets/img/img3.jpg');
require('../assets/img/img4.jpg');
require('../assets/img/img5.jpg');
require('../assets/img/img6.jpg');
require('../assets/img/img7.jpg');
require('../assets/img/img8.jpg');
require('../assets/img/img9.jpg');
require('../assets/img/img10.jpg');
require('../assets/img/img11.jpg');
require('../assets/img/img12.jpg');
require('../assets/img/img13.jpg');
require('../assets/img/img14.jpg');
require('../assets/img/img15.jpg');
require('../assets/img/img16.jpg');
require('../assets/img/DES_1.jpg');
require('../assets/img/DES_2.jpg');
require('../assets/img/DES_3.jpg');
require('../assets/img/DES_4.jpg');
require('../assets/img/DES_5.jpg');
require('../assets/img/DES_6.jpg');
require('../assets/img/DES_7.jpg');
require('../assets/img/DES_8.jpg');
require('../assets/img/DES_9.jpg');
require('../assets/img/DES_10.jpg');
require('../assets/img/ANVP_1.jpg');
require('../assets/img/ANVP_2.jpg');
require('../assets/img/ANVP_3.jpg');
require('../assets/img/ANVP_4.jpg');
require('../assets/img/ANVP_5.jpg');
require('../assets/img/ANVP_6.jpg');
require('../assets/img/ANVP_7.jpg');
require('../assets/img/ANVP_8.jpg');
require('../assets/img/ANVP_9.jpg');
require('../assets/img/ANVP_10.jpg');