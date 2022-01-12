import styled from "styled-components";
import { color, size, zIndex } from "../constant.atm";

export const HeaderStyled = styled.header`
  background-color: ${color.brand.light};
  display: flex;
  height: ${size.header.height};
  top: 0px;
  left: 0px;
  right: 0px;
  position: sticky;
  z-index: ${zIndex.high};
`;
