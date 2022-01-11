import styled, { css } from "styled-components";
import { border, color, size, spacing } from "../constant.atm";

const verticalSeparatorBaseCss = css`
  display: inline-block;
  width: ${size.separator.vertical.normal.with};
  height: ${size.separator.vertical.normal.height};
  margin: ${spacing.margin.separator.vertical.normal};

  *:first-child{
    border-right: ${border.separator} ${color.darkGray};
    width: 100%;
    height: 100%;
  }
`;
const verticalSeparatorLargeCss = css`
  height: ${size.separator.vertical.large.height};
`;
const horizontalSeparatorBaseCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${spacing.margin.separator.horizontal.normal};

  *:first-child{
    border-bottom: ${border.separator} ${color.gray};
    width: 100%;
  }
`;
const horizontalSeparatorLargeCss = css`
  margin: ${spacing.margin.separator.horizontal.large};
`

export const SeparatorStyled = styled.div`
  ${({ vertical, large }) => css`
    ${vertical ? verticalSeparatorBaseCss : horizontalSeparatorBaseCss}
    ${large ? (vertical ? verticalSeparatorLargeCss : horizontalSeparatorLargeCss) : ''}
  `}
`;

export const SeparatorStrawStyled = styled.div`
  ${props => !props.outlined && 'border: none !important;'}
`;
