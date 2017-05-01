import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Goals from './components/Goals';
import AddGoals from './components/AddGoals';
import './index.css';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="Goals" component={Goals} />
      <Route path="AddGoals" component={AddGoals} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>),
  document.getElementById('root')
);
