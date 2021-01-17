import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "App";
import { store } from "redux/store/configureStore";
import GlobalStyle from "theme";

render(
  <Provider store={store()}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
