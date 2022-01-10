import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProductsListPage from './components/ProductsListPage';
import ProductDetailPage from './components/ProductDetailPage';
import { Header } from './components/Atomic/Header.atm';


export default class Routes extends React.Component {
  render(){
    return (
      <Router>
        <Header />
        <Route path='/:code/' component={ProductDetailPage} />
        <Route path='/' exact component={ProductsListPage} />
      </Router>
    )
  }
}
