import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--color-bg);
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Montserrat', -apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  }
  :root {
    --color-primary: #A4FFAE;
    --color-black: #333;
    --color-white: #FFF;
    --color-gray: #E2E6E9;

    --color-bg: #101014;
    --color-bg-container: #24232A;

    --strength-weak: #FF6961;
    --strength-medium: #F5CA6E;
    --strength-strong: #A4FFAE;

    --color-text: #9A99A0;
  }
`;
