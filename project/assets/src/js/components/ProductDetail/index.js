import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { PongSpinner } from 'react-spinners-kit';
import { Container, Row, Col } from 'react-bootstrap';

import { fetchProduct } from '../../store/actions';


class ProductsDetail extends React.Component {

  componentDidMount(){
    const { code } = this.props.match.params;
    this.props.fetchProduct(code);
  }

  render(){
    const { isLoading, product } = this.props;

    if (isLoading) {
      return (
        <Container style={{ height: '100vh' }}>
          <div style={{ margin: '0 auto', top: 'calc(50% - 17px)', width: '60px', position: 'relative' }}>
            <PongSpinner />
          </div>
        </Container>
      )
    }

    if (product) {
      return (
        <Container>
          <Row>
            <Col>
              <h1>{product.name}</h1>
            </Col>
          </Row>

          <Row>
            <Col>
              <dl>
                <dt>Code:</dt>
                <dd>{product.code}</dd>
                {product.description &&
                  <React.Fragment>
                    <dt>Description:</dt>
                    <dd>{product.description}</dd>
                  </React.Fragment>
                }
                <dt>Available quantity:</dt>
                <dd>{product.available_quantity}</dd>
              </dl>
              <Link to='/'>Back to products list</Link>
            </Col>
          </Row>
        </Container>
      );
    }

    return null;
  }
}

const mapStateToProps = (state) => ({ isLoading: state.products.isLoading, product: state.products.selectedItem });
const mapDispatchToProps = (dispatch) => ({ fetchProduct: (code) => dispatch(fetchProduct(code)) });

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDetail);
