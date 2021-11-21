import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { mainFeaturedBoard } from "../card-data/WelcomeBoard_data";

export default function MainFeaturedBoard() {
  const main = mainFeaturedBoard;

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${main.image})`,
        borderRadius: "10px",
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={main.image}
          alt={main.imageText}
        />
      }
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.4)",
          borderRadius: "10px",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h1"
              color="inherit"
              gutterBottom
            >
              {main.title}
            </Typography>
            <Typography variant="body2" color="inherit" paragraph>
              {main.description}
            </Typography>
            <Link variant="subtitle1" href="#">
              {main.linkText}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
