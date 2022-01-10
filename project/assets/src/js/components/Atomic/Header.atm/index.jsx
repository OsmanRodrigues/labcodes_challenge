import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyled } from "./Header.styled";

export class Header extends React.Component {
  render() {
    return (
      <Link noDecoration to="/">
        <HeaderStyled>
            {this.props.children}
        </HeaderStyled>
      </Link>
    );
  }
}
