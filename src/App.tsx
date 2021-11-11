import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store/configureStore";
import { ThemeProvider } from "styled-components";
import ThemeModel from "models/Theme";
import routes from "router/routes";
import Routes from "router/components/Routes";
import GlobalStyles from "components/styles/Global.styled";

const theme = {
  colors: {
    lightGrey: "rgba(34,36,38,.15)",
    mainBlack: "#101010",
    mainBlue: "#0075FF",
  },
  boxShadow: "4px 4px 0 0 rgb(34 36 38 / 15%)",
  borderRadius: "8px",
} as ThemeModel;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <>
          <GlobalStyles />
          <BrowserRouter>
            <Routes routes={routes} />
          </BrowserRouter>
        </>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
