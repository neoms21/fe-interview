import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    padding: 2rem 10rem;
    max-width: 1280px;
    font-family: 'Mukta Vaani', Open-Sans, Helvetica, Sans-Serif;
    font-size: 18px;

    @media only screen and (max-width: 768px) {
      padding: 2rem;
      font-size: 15px;
    }
  }
`;

export default GlobalStyle;
