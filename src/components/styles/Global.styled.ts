import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: #fff;
    color: #333333;
    font-family: sans-serif;
    margin: 0;
  }
`;

export default GlobalStyles;
