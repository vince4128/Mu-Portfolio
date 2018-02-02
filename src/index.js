import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route, Switch, Link, Redirect } from "react-router-dom";
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
          <Redirect exact path="/" to="/projets/0"/>
          <Route path="/projets/:id/:pid" component={ProjectDetail} />
          <Route path="/projets/:id" component={ProjectSlider} />
          <Route path="/list" component={ProjectList} />
        </Switch>
      </section>
    </HashRouter>
  </Provider>
  , document.querySelector('.container')
);

require("../style/style.scss");
