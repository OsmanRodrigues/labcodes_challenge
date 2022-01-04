import React from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/actions';
import { PongSpinner } from 'react-spinners-kit';
import { Container, Row, Col } from 'react-bootstrap';

import Product from './Product';


class ProductsList extends React.Component {

  componentDidMount(){
    this.props.fetchProducts();
  }

  render(){
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
            <h1>Products List</h1>
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

const mapStateToProps = (state) => ({ isLoading: state.products.isLoading, products: state.products.items });
const mapDispatchToProps = (dispatch) => ({ fetchProducts: () => dispatch(fetchProducts()) });

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
