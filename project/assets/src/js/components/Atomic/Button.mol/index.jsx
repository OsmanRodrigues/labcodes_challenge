import React from "react";
import { ButtonStyled } from "./Button.styled";

export class Button extends React.Component {
  render() {
    return (
      <ButtonStyled>{this.props.children}</ButtonStyled>
    );
  }
}
