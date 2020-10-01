import React from "react";

import { Box, Grid, Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Heading from "./Heading";
import CardList from "./CardList";
import RayImage from "./RayImage";

const useStyles = makeStyles((theme) => ({
  box: {
    position: "relative",
    background:
      "linear-gradient(to top, #749fd2, #749fd2 30px,  transparent 30px), repeating-linear-gradient(to bottom, transparent, transparent 40px, #ffffff 40px, #ffffff 41px), repeating-linear-gradient(to right, #fbe0dd, #fbe0dd 40px, #ffffff 40px, #ffffff 41px); ",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  grid: {
    paddingTop: "5vh",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Box component="div" height="100vh" className={classes.box}>
      <Heading />
      <Grid container>
        <Hidden xsDown>
          <Grid container item xs={1} />
        </Hidden>
        <Grid container item xs={12} md={6} className={classes.grid}>
          <CardList />
        </Grid>
      </Grid>
      <RayImage />
    </Box>
  );
}

export default App;
