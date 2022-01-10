import styled from "styled-components";
import { color, radius, shadow, size, spacing, viewPort } from "../constant.atm";

export const CardStyled = styled.div`
  width: ${size.card.width};
  min-height: ${size.card.height};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${color.white};
  border-radius: ${radius.large};
  padding: ${spacing.padding.medium};
  box-shadow: ${shadow.normal} ${color.white};

  ${props => props.isFocused && `
    border: 2px solid ${color.brand.highLight};
    box-sizing: border-box;
    box-shadow: ${shadow.normal} ${color.white};
  `}

   @media(min-width: ${viewPort.mobile}) {
     :hover {
       ${props => !props.isFocused && `
         border: 2px solid ${color.lightGray};
         box-sizing: border-box;
         box-shadow: ${shadow.emphasize} ${color.gray};
       `}
     }
  }
`;
