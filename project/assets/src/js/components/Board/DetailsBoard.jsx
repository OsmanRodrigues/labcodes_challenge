import React from "react";
import { Box } from "../Atomic/Box.mol";
import { Card } from "../Atomic/Card.atm";
import { Separator } from "../Atomic/Separator.mol";
import { DD, DL, DT, H1, H3, Paragraph } from '../Atomic/Typography.atm';

export class DetailsBoard extends React.Component {
  render() {
    const { product } = this.props;

    return (
      <Card disableInteractivity>
        <DL fluid>
          <DT>
            <H3>Available quantity:</H3>
          </DT>
          <DD>
            <H1>{product.available_quantity}</H1>
          </DD>
          <Separator outlined />
          <Box>
            <DT>
              <H3>I/O History</H3>
            </DT>
            <DD>
              <Paragraph>{product.history || 'No history'}</Paragraph>
            </DD>
          </Box>
        </DL>
      </Card>
    );
  }
}
