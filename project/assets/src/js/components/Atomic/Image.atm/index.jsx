import React from "react";
import { ImageStyled } from "./Image.styled";
import BrandSvg from "../../../../static/images/brand.svg";

export const Image = {
  Brand: class extends React.Component {
    render() {
      return (
        <ImageStyled src={BrandSvg} alt={'Stationery Shop Brand.'} {...this.props} />
      );
    }
  }
};
