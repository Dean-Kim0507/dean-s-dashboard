import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "../../components/cards/Chart";
import Avenue from "../../components/cards/Avenue";
import Quotes from "../../components/cards/Quotes";
import WelcomeBoard from "../../components/cards/WelcomeBoard";
import MockCard from "../../components/cards/MockCard";
import CardFrame from "../../components/CardFrame";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "20rem",
  },
  paper: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    height: "20rem",
  },
  table: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #d3d3d3",
  },
}));
const Dashboard = (props) => {
  const classes = useStyles();
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="xl" sx={{ mt: 3, mb: 10 }}>
        <Grid container spacing={3}>
          {/* welcome */}
          <Grid item xs={12} md={12} lg={12}>
            <WelcomeBoard />
          </Grid>
          {/* Recent Quotes */}
          <Grid item xs={12}>
            <Paper className={classes.table}>
              <Quotes />
            </Paper>
          </Grid>

          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={classes.paper}>
              <Chart />
            </Paper>
          </Grid>
          {/* Recent Avenue */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={classes.paper}>
              <Avenue />
            </Paper>
          </Grid>

          {/* Third Line */}
          <Grid item xs={12} md={4} lg={4.5}>
            <CardFrame title={"Mock"} className={classes.card}>
              <MockCard />
            </CardFrame>
          </Grid>
          <Grid item xs={12} md={4} lg={4.5}>
            <CardFrame title={"Mock"} className={classes.card}>
              <MockCard />
            </CardFrame>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <CardFrame title={"Mock"} className={classes.card}>
              <MockCard />
            </CardFrame>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
