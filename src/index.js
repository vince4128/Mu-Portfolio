import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import promise from 'redux-promise'; 

import reducers from './reducers';
import ProjectList from './containers/ProjectList';
import ProjectDetail from './containers/ProjectDetail';
import ProjectSlider from './containers/ProjectSlider';
import Logo from './components/logo';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <section>
        <Switch>
          <Route path="/projets/:id/:pid" component={ProjectDetail}/>
          <Route path="/projets/:id/:pid" component={Logo}/>
          <Route path="/projets/:id" component={ProjectSlider}/>
          <Route path="/projets/:id" component={Logo}/>
          <Route path="/projets" component={ProjectList}/>
          <Route path="/" component={ProjectList}/>
        </Switch>
      </section>
    </BrowserRouter>
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