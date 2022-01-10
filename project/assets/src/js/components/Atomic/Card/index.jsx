import React from "react";
import { CardStyled } from "./Card.styled";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
  }

  render() {
    return (
      <CardStyled
        {...this.props}
        isFocused={this.state?.isFocused}
        onMouseDown={() => {
          this.setState({ isFocused: true });
        }}
        onMouseLeave={() => {
          if (this.state.isFocused) {
            this.setState({ isFocused: false });
          }
        }}
      >
      {this.props.children}
      </CardStyled>
    )
  }
}
