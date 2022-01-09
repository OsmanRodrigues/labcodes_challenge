import React from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/actions';
import { PongSpinner } from 'react-spinners-kit';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from "prop-types";
import Product from './Product';
import { H1 } from '../Atomic/Typography.atm';


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
          <Col>
            <H1>Products List</H1>
          </Col>
        </Row>

        {products.map(product => (
          <Row key={product.code}>
            <Col>
              <Product {...product}/>
            </Col>
          </Row>
        ))}
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
