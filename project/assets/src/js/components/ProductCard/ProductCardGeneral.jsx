import React from "react";
import { Box, Button, Card, DD, DL, DT, H2, Link, Separator } from '../Atomic';

export class ProductCardGeneral extends React.Component {
  render() {
    const { product } = this.props;

    return (
      <Link to={`/${product.code}/`}>
        <Card>
          <DL fluid>
            <DT>Name:</DT>
            <DD>
              <H2>
                {product.name}
              </H2>
            </DD>
            <Separator outlined />
            <Box horizontal>
              <Box>
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
              </Box>
              <Box grow={0.01} position="flex-end">
                <Link to={`/${product.code}/`}>
                  <Button>
                      See Details
                  </Button>
                </Link>
              </Box>
            </Box>
          </DL>
        </Card>
      </Link>
    );
  }
}
