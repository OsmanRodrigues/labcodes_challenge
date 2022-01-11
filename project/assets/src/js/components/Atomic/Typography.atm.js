import styled, { css } from "styled-components";
import { color, typography, size } from './constant.atm';

const typographySharedStyle = css`
  font-family: ${typography.font.family};
  font-style: ${typography.font.style};
  color: ${color.black};
`;

const headingSharedStyle = css`
  font-weight: bold;
`;

const descriptionListSharedStyle = css`
  line-height: ${typography.font.lineHeight.dl};
`;

export const H1 = styled.h1`
  ${typographySharedStyle}
  ${headingSharedStyle}
  font-size: ${typography.font.size.h1};
  line-height: ${typography.font.lineHeight.h1};
`;

export const H2 = styled.h2`
  ${typographySharedStyle}
  ${headingSharedStyle}
  font-size: ${typography.font.size.h2};
  line-height: ${typography.font.lineHeight.h2};
`;

export const H3 = styled.h3`
  ${typographySharedStyle}
  ${headingSharedStyle}
`;

export const Paragraph = styled.p`
  ${typographySharedStyle}
  font-weight:  ${props => props.isBolded ? 'bold' : 'normal'};
  line-height: ${typography.font.lineHeight.p};
`;

export const DL = styled.dl`
  ${typographySharedStyle}
  ${descriptionListSharedStyle}
  width: ${props => props.fluid && size.general.fluid};
`;

export const DD = styled.dd`
  ${typographySharedStyle}
  ${descriptionListSharedStyle}
`;

export const DT = styled.dt`
  ${typographySharedStyle}
  ${descriptionListSharedStyle}
`;

