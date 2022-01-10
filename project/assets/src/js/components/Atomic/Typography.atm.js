import styled, { css } from "styled-components";
import { color, typography } from './constant.atm';

const typographySharedStyle = css`
  font-family: ${typography.font.family};
  font-style: ${typography.font.style};
  color: ${color.black};
`;

export const H1 = styled.h1`
  ${typographySharedStyle}
`;

export const H2 = styled.h2`
  ${typographySharedStyle}
`;

export const H3 = styled.h3`
  ${typographySharedStyle}
`;

export const Paragraph = styled.p`
  ${typographySharedStyle}
  font-weight:  ${props => props.isBolded ? 'bold' : 'normal'};
`;

export const DL = styled.dl`
  ${typographySharedStyle}
`;

export const DD = styled.dd`
  ${typographySharedStyle}
`;

export const DT = styled.dt`
  ${typographySharedStyle}
`;

