import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";

require("../style/style.scss");

import App from './components/app';
import ProjectList from './containers/ProjectList';
import ProjectDetail from './containers/ProjectDetail';

import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <section>
        <Switch>
          <Route path="/" component={App}/>
          <Route path="/projets" component={ProjectList}/>
          <Route path="/projets-detail/:id" component={ProjectDetail}/>
        </Switch>
      </section>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container')
  );
  
require('../assets/img/img1.jpg');
require('../assets/img/img2.jpg');
require('../assets/img/img3.jpg');
require('../assets/img/img4.jpg');