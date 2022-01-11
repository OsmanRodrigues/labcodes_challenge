import { createGlobalStyle } from 'styled-components';
import { color, typography, viewPort } from './constant.atm';

export const GlobalStyle = createGlobalStyle`
  html {
     @media (max-width:${viewPort.md}) {
      font-size: ${typography.font.size.root.md};
    }
  }

  body {
    background-color: ${color.background};
  }
`
