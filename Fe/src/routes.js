import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Dashboard from "./views/Dashboard";
import MainLayout from "./layout/MainLayout";
import { Box } from "@mui/material";
import { quoteData } from "./_store/utils/reducerFunctions";
import { connect } from "react-redux";
const MainRoutes = (props) => {
  const { fetchData } = props;
  useEffect(() => {
    fetchData();
  }, []);

  const NavRoute = ({ exact, path, component: Component }) => (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <Box
          sx={{
            display: "flex",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
          }}
        >
          <MainLayout />
          <Component {...props} />
        </Box>
      )}
    />
  );

  return (
    <div className="Routes">
      <Router>
        <Switch>
          <NavRoute exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData() {
      dispatch(quoteData());
    },
  };
};

export default withRouter(connect(null, mapDispatchToProps)(MainRoutes));
