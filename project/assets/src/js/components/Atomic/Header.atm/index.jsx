import React from "react";
import { Link } from "react-router-dom";
import { Box } from "..";
import { Image } from "../Image.atm";
import { HeaderStyled } from "./Header.styled";

export class Header extends React.Component {
  render() {
    return (
      <Link to="/">
        <HeaderStyled>
          <Box horizontal position={'center'}>
            <Image.Brand />
          </Box>
        </HeaderStyled>
      </Link>
    );
  }
}
