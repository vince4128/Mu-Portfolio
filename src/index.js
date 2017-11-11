import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import promise from 'redux-promise'; 

import reducers from './reducers';
import ProjectList from './containers/ProjectList';
import ProjectDetail from './containers/ProjectDetail';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <section>
        <h1>Header</h1>
        <Switch>
          <Route path="/projets/detail/:id" component={ProjectDetail}/>
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