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
    lightTextColor: "#999",
    textColor: "#111827",
    lightGrey: "#F9FAFB",
    darkGrey: "#F2F3F5",
    white: "#fff",
    mainBlue: "#0075FF",
  },
  boxShadow: "10px 10px 10px rgb(34 36 38 / 8%)",
  borderRadius: "8px",
  fontSize: "14px",
  titleFontSize: "24px",
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
