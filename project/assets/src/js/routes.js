import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProductsListPage from './components/ProductsListPage';
import ProductDetailPage from './components/ProductDetailPage';
import { Header } from './components/Atomic/Header.atm';
import { Separator } from './components/Atomic/Separator.mol';


export default class Routes extends React.Component {
  render(){
    return (
      <Router>
        <Header />
        <Separator large/>
        <Route path='/:code/' component={ProductDetailPage} />
        <Route path='/' exact component={ProductsListPage} />
      </Router>
    )
  }
}
