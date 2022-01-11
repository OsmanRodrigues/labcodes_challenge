import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  ${props => !props.decoration && `
    text-decoration: none !important;
    color: none !important;
  `}
`
