import React from 'react';
import { ProductCardDetails } from './ProductCardDetails';
import { ProductCardGeneral } from './ProductCardGeneral'

class ProductCard extends React.Component {
  render() {
    const { isDetails, product } = this.props;

    if (isDetails) {
      return <ProductCardDetails product={product} />;
    }

    return <ProductCardGeneral product={product} />;

  }
}

export default ProductCard;
