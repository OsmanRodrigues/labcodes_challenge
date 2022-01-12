import React from 'react';
import ProductDetailsPage from './containers/ProductDetailsPage';
import ProductsListPage from './containers/ProductsListPage';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from './components/Atomic/Header.atm';
import { Separator } from './components/Atomic/Separator.mol';

export default class Routes extends React.Component {
  render(){
    return (
      <Router>
        <Header />
        <Separator large/>
        <Route path='/:code/' component={ProductDetailsPage} />
        <Route path='/' exact component={ProductsListPage} />
      </Router>
    )
  }
}
