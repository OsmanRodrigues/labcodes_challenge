import React from 'react';
import ProductCard from '../ProductCard';
import PropTypes from "prop-types";

import { Separator } from '../Atomic/Separator.mol';
import { Spinner } from '../Atomic/Spinner.mol';
import { H1 } from '../Atomic/Typography.atm';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchProducts } from '../../store/actions';
import { InventoryStatusBoard } from './InventoryStatusBoard';

export class ProductsListPage extends React.Component {

  componentDidMount(){
    this.props.fetchProducts();
  }

  render() {
    const { isLoading, products } = this.props;

    if (isLoading) {
      return (
       <Spinner />
      )
    }
    return (
      <Container fluid={"lg"}>
        <Row>
          <Col xs={6}>
            <H1>Products List</H1>
          </Col>
          <Col xs={6}>
            <InventoryStatusBoard products={products} />
          </Col>
        </Row>
        <Separator large/>
        <Row>
          {products.map(product => (
            <Col xs={12} sm={6} key={product.code}>
              <ProductCard {...product} />
              <Separator />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

ProductsListPage.propTypes = {
  isLoading: PropTypes.bool,
  fetchProducts: PropTypes.func,
  products: PropTypes.array
};

ProductsListPage.defaultProps = {
  isLoading: false,
  fetchProducts: () => {},
  products: []
};

const mapStateToProps = (state) => ({ isLoading: state.products.isLoading, products: state.products.items });
const mapDispatchToProps = (dispatch) => ({ fetchProducts: () => dispatch(fetchProducts()) });

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListPage);
