import styled from "styled-components";
import { border, color, radius, shadow, size, spacing, viewPort } from "../constant.atm";

export const CardStyled = styled.div`
  width: ${props => props.fluid && size.general.fluid};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${color.white};
  border-radius: ${radius.large};
  padding: ${spacing.padding.medium};
  box-shadow: ${shadow.normal} ${color.white};

  ${props => props.isFocused && `
    border: ${border.card} ${color.brand.highLight};
    box-sizing: border-box;
    box-shadow: ${shadow.normal} ${color.white};
  `}

   @media(min-width: ${viewPort.md}) {
     :hover {
       ${props => !props.isFocused && `
         border: ${border.card} ${color.lightGray};
         box-sizing: border-box;
         box-shadow: ${shadow.emphasize} ${color.gray};
       `}
     }
  }
`;
