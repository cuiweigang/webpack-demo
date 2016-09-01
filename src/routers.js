/**
 * Created by cuiweigang on 16/8/30.
 */
let React = require('react');
import {applyMiddleware} from 'redux';
import { Router, Route, Link, hashHistory,browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import IndexPage from './components/index/index.js';

import createStore from './stores/store.js';


const logger = store => next => action => {
  console.log('dispatching', action);

  return next(action)._result;
};


//var store = applyMiddleware(logger)(createStore)();
var store = createStore();

var routers = (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={IndexPage}/>
      </Router>
    </Provider>
);

export default routers;