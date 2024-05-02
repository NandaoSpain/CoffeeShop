import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${(props) => props.theme.background};
  }

  body, textarea, input, button {
    font-family: 'Baloo 2';
  }
`
