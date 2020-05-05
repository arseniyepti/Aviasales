import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
    display: flex;
    justify-content: center;
    color: #4A4A4A;
  }
`;

export default GlobalStyle;
