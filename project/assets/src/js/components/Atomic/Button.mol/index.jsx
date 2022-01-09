import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled, IconButtonStyled } from "./Button.styled";

export class Button extends React.Component {
  render() {
    const { onClick, isIconButton, children } = this.props;
    const ButtonComponent = isIconButton ? IconButtonStyled : ButtonStyled

    return (
      <ButtonComponent onClick={onClick}>{children}</ButtonComponent>
    );
  }
}

Button.propTypes = {
  isIconButton: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  isIconButton: false,
  onClick: () => { }
};
