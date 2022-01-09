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

  :hover, :active {
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
