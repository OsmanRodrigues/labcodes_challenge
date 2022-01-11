import React from 'react';
import { Box, Button, Card, DD, DL, DT, H2, Link, Separator } from '../Atomic';

export default function ProductCard(props){
  return (
    <Link to={`/${props.code}/`}>
      <Card>
        <DL fluid>
          <DT>Name:</DT>
          <DD>
            <H2>
              {props.name}
            </H2>
          </DD>
          <Separator outlined />
          <Box horizontal>
            <Box>
              <DT>Code:</DT>
              <DD>{props.code}</DD>
              <DT>Category:</DT>
              <DD>{props.category}</DD>
            </Box>
            <Box grow={0.01} position="flex-end">
              <Link to={`/${props.code}/`}>
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
