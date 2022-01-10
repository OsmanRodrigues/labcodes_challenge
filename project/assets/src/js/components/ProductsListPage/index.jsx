import React from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/actions';
import { PongSpinner } from 'react-spinners-kit';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from "prop-types";
import ProductCard from '../ProductCard';
import { H1 } from '../Atomic/Typography.atm';
import { Separator } from '../Atomic/Separator.mol';

export class ProductsListPage extends React.Component {

  componentDidMount(){
    this.props.fetchProducts();
  }

  render() {
    const { isLoading, products } = this.props;

    if (isLoading) {
      return (
        <Container style={{ height: '100vh' }}>
          <div style={{ margin: '0 auto', top: 'calc(50% - 17px)', width: '60px', position: 'relative' }}>
            <PongSpinner />
          </div>
        </Container>
      )
    }

    return (
      <Container>
        <Row>
          <Col xs={6}>
            <H1>Products List</H1>
          </Col>
        </Row>
        <Row>
          {products.map(product => (
            <Col xs={6} key={product.code}>
              <ProductCard {...product} />
              <Separator large noLine/>
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
