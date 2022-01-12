import React from "react";
import BrandSvg from "../../../../static/images/brand.svg";
import { ImageStyled } from "./Image.styled";

export const Image = {
  Brand: class extends React.Component {
    render() {
      return (
        <ImageStyled src={BrandSvg} alt={'Stationery Shop Brand.'} {...this.props} />
      );
    }
  }
};
