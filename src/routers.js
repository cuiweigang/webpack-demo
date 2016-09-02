/**
 * Created by cuiweigang on 16/8/30.
 */
let React = require('react');
import {applyMiddleware} from 'redux';
import { Router, Route, Link, hashHistory,browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import api from './middleware/api.js';

import IndexPage from './containers/index.js';
import createStore from './stores/store.js';

const logger = store => next => action => {
  next(action);
};

var store = applyMiddleware(logger, thunk, api)(createStore)();

var routers = (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={IndexPage}/>
      </Router>
    </Provider>
);

export default routers;