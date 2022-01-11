import React from "react";
import { Box, DD, DL, DT, H3, Separator } from "../Atomic";

export class InventoryStatusBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalProductsCount: 0,
      singleProductsCount: 0
    };
  }

  componentDidMount() {
    const { products } = this.props;

    if (products?.length) {
      const { available_quantity } = products.reduce((prevProduct, currProduct) => ({
          available_quantity: prevProduct.available_quantity + currProduct.available_quantity
      }));
      const singleProductsCount = products.length;

      this.setState({
        totalProductsCount: available_quantity,
        singleProductsCount
      })
    }
  }

  render() {
    return (
      <Box>
        <H3>Inventory Status</H3>
        <DL>
          <Box horizontal>
            <DT>
              Single products:
            </DT>
            <Separator vertical />
            <DD>
              {this.state.singleProductsCount}
            </DD>
          </Box>
          <Box horizontal>
            <DT>
              Total items in stock:
            </DT>
            <Separator vertical />
            <DD>
              {this.state.totalProductsCount}
            </DD>
          </Box>
        </DL>
      </Box>
    );
  }
}
