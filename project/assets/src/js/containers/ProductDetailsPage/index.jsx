import React from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { fetchProduct } from '../../store/actions';
import { Button, H1, Spinner, Link, Box, Separator } from '../../components/Atomic';
import { FaArrowLeft } from 'react-icons/fa'
import { ProductCardDetails } from '../../components/ProductCard/ProductCardDetails';
import { DetailsBoard } from '../../components/Board/DetailsBoard';


export class ProductDetailsPage extends React.Component {

  componentDidMount(){
    const { code } = this.props.match.params;
    this.props.fetchProduct(code);
  }

  render(){
    const { isLoading, product } = this.props;

    if (isLoading) {
      return (
        <Spinner />
      )
    }

    if (product) {
      return (
        <Container fluid={"lg"}>
          <Row>
            <Col>
              <Box horizontal>
                <Link to={'/'}>
                  <Button isIconButton>
                    <FaArrowLeft/>
                  </Button>
                </Link>
                <H1>{product.name}</H1>
                </Box>
            </Col>
          </Row>
          <Separator/>
          <Row>
            <Col sm={8}>
              <ProductCardDetails product={product} />
              <Separator/>
            </Col>
            <Col sm={4}>
              <DetailsBoard product={product} />
            </Col>
          </Row>
        </Container>
      );
    }

    return null;
  }
}

ProductDetailsPage.propTypes = {
  isLoading: PropTypes.bool,
  fetchProduct: PropTypes.func,
  product: PropTypes.object
};

ProductDetailsPage.defaultProps = {
  isLoading: false,
  fetchProduct: () => {},
  product: null
};

const mapStateToProps = (state) => ({ isLoading: state.products.isLoading, product: state.products.selectedItem });
const mapDispatchToProps = (dispatch) => ({ fetchProduct: (code) => dispatch(fetchProduct(code)) });

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);
