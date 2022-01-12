import React from "react";
import { Box, Button, Card, DD, DL, DT, H2, Link, Separator } from '../Atomic';

export class ProductCardDetails extends React.Component {
  render() {
    const { product } = this.props;

    return (
      <Card disableInteractivity>
        <DL fluid>
          <Box horizontal>
            <DT>Code:</DT>
            <Separator vertical/>
            <DD>{product.code}</DD>
          </Box>
          <Box horizontal>
            <DT>Category:</DT>
            <Separator vertical/>
            <DD>{product.category}</DD>
          </Box>
          {product.description &&
            <Box horizontal>
              <DT>Description:</DT>
              <Separator vertical/>
              <DD>{product.description}</DD>
            </Box>
          }
        </DL>
      </Card>
    );
  }
}
