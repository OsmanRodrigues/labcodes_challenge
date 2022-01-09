import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProductsListPage from './components/ProductsListPage';
import ProductDetail from './components/ProductDetail';


export default class Routes extends React.Component {
  render(){
    return (
      <Router>
        <Route path='/:code/' component={ProductDetail} />
        <Route path='/' exact component={ProductsListPage} />
      </Router>
    )
  }
}
