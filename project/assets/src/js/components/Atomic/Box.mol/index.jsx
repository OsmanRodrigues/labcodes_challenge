import React from "react";
import { BoxStyled } from "./Box.styled";

export class Box extends React.Component {
  render() {
    return (
      <BoxStyled {...this.props}>
        {this.props.children}
      </BoxStyled>
    );
  }
}
