/**
 * Created by cuiweigang on 16/8/30.
 */
let React = require('react');
import { Router, Route, Link, hashHistory,browserHistory } from 'react-router'

import IndexPage from './components/index/index.js';
import Demo2Page from './components/demo2/demo.js'

var routers = (
    <Router history={hashHistory}>
      <Route path="/" component={IndexPage}/>
      <Route path="/demo" component={Demo2Page}/>
    </Router>
);

export default routers;