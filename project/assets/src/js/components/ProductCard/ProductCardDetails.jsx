import React from "react";
import { Box } from '../Atomic/Box.mol';
import { Card } from '../Atomic/Card.atm';
import { Separator } from '../Atomic/Separator.mol';
import { DD, DL, DT } from '../Atomic/Typography.atm';

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
