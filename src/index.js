import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import mixin from "styles/mixin";
import { ThemeProvider } from "styled-components";
const GlobalStyle = createGlobalStyle`

  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #eeeeee;
    color: #000;
  }

`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ ...mixin }}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
