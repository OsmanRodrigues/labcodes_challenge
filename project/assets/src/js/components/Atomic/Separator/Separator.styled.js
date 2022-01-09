import styled, { css } from "styled-components";
import { color } from "../constant.atm";

const verticalSeparatorBaseCss = css`
  display: inline-block;
  width: 1px;
  height: 1rem;
  margin: 0rem 0.5rem;

  *:first-child{
    width: 100%;
    height: 100%;
    border-right: 1px solid ${color.gray};
  }
`
const verticalSeparatorLargeCss = css`
  height: 2.0rem;
`
const horizontalSeparatorBaseCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.75rem 0rem;

  *:first-child{
    border-bottom: 1px solid ${color.gray};
    width: 100%;
  }
`
const horizontalSeparatorLargeCss = css`
  margin: 1.5rem 0rem;
`

export const SeparatorStyled = styled.div`
  ${({ vertical, large }) => css`
    ${vertical ? verticalSeparatorBaseCss : horizontalSeparatorBaseCss}
    ${large ? (vertical ? verticalSeparatorLargeCss : horizontalSeparatorLargeCss) : ''}
  `}
`;

export const SeparatorStrawStyled = styled.div``;
