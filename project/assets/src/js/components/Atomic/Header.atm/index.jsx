import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyled } from "./Header.styled";

export class Header extends React.Component {
  render() {
    return (
      <Link to="/">
        <HeaderStyled>
            {this.props.children}
        </HeaderStyled>
      </Link>
    );
  }
}
