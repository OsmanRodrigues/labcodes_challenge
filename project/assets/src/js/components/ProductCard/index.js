import React from 'react';
import { Button, Card, DD, DL, DT, Link, Separator } from '../Atomic';

export default function ProductCard(props){
  return (
    <Link noDecoration to={`/${props.code}/`}>
      <Card>
        <DL>
          <DT>Name:</DT>
          <DD>{props.name}</DD>
          <Separator />
          <DT>Code:</DT>
          <DD>{props.code}</DD>
          <DT>Category:</DT>
          <DD>{props.category}</DD>
          <Link noDecoration to={`/${props.code}/`}>
            <Button>
                See Details
            </Button>
          </Link>
        </DL>
      </Card>
    </Link>
  );
}
