import styled from "styled-components";

export const BoxStyled = styled.div`
  display: flex;
  flex-direction: ${props => props.horizontal ? 'row' : 'column'};
  flex-grow: ${props => props.grow || 1};
  ${({ horizontal, position }) => position && `
    ${horizontal ? 'justify-content' : 'align-self'}: ${position};
  `}
`;
