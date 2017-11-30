import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/home.jsx';

export default (
  <Router>
    <Route exact path='/' component={Home} />
  </Router>
);