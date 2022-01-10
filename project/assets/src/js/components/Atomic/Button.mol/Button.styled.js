import styled from "styled-components";
import { color, radius, shadow, size, spacing, typography } from "../constant.atm";

export const ButtonStyled = styled.button`
  color: ${color.white};
  background-color: ${color.brand.normal};
  width: ${size.button.width};
  height: ${size.button.height};
  border-radius: ${radius.normal};
  border: none;
  font-family: ${typography.font.family};
  font-weight: bold;
  padding: 0 ${spacing.padding.large};

  :hover {
    background-color: ${color.brand.dark};
    box-shadow: ${shadow.normal} ${color.brand.light};
  }

  :focus {
    background-color: ${color.brand.highDark};
    box-shadow:
      ${shadow.normal} ${color.brand.light},
      ${shadow.large} ${color.brand.highLight};
  }
`;

export const IconButtonStyled = styled(ButtonStyled)`
  color: ${color.brand.normal};
  background: none;
  width: ${size.iconButton.normal};
  height: ${size.iconButton.normal};
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    color: ${color.brand.ultraLight};
    box-shadow: unset;
  }

  :focus {
    color: ${color.brand.ultraLight};
    box-shadow:
      ${shadow.normal} ${color.brand.light},
      ${shadow.large} ${color.brand.highLight};
  }

  *:first-child{
    width: 70%;
    height: 70%;
  }
`;
