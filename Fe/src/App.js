import React from "react";
import { Provider } from "react-redux";
import store from "./_store";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./themes/index";

// import "primereact/resources/themes/bootstrap4-light-blue/theme.css"; //theme
// import "primereact/resources/primereact.min.css"; //core css
// import "primeicons/primeicons.css";
// import "primeflex/primeflex.css";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme()}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
