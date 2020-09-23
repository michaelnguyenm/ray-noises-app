import React, { useState, useEffect, useContext } from "react";
// import logo from "./logo.svg";
import "./App.css";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Hidden,
  Link,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LoadingSpinner from "./LoadingSpinner";
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
  gridPadding: {
    paddingTop: "5vh",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  card: {
    // height: "50vh",
    width: "100vw",
    zIndex: 100,
  },
  cardHeader: {
    backgroundColor: "#fde5ab",
  },
  typographyHeader: {
    color: "#ffffff",
    fontFamily: "Pacifico",
  },
}));

function App() {
  const classes = useStyles();

  // if (fileList.length === 0) return <LoadingSpinner />;
  return (
    <Box component="div" height="100vh" className={classes.box}>
      <Heading />
      <Grid container>
        <Hidden xsDown>
          <Grid container item xs={1} />
        </Hidden>
        <Grid container item xs={12} md={6} className={classes.gridPadding}>
          <CardList />
        </Grid>
      </Grid>
      <RayImage />
    </Box>
  );
}

export default App;
