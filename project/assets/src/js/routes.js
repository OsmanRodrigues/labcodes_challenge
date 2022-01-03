import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';


export default class Routes extends React.Component {
  render(){
    return (
      <Router>
        <Route path='/:code/' component={ProductDetail} />
        <Route path='/' exact component={ProductsList} />
      </Router>
    )
  }
}
