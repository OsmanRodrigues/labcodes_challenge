import styled from "styled-components";
import { spacing, zIndex } from "..";
import { color } from "../constant.atm";

export const HeaderStyled = styled.header`
  background-color: ${color.brand.light};
  height: 84px;
  top: 0px;
  left: 0px;
  right: 0px;
  position: sticky;
  z-index: ${zIndex.high};
`;
