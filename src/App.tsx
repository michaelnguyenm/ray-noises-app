import React, { useState, useEffect, useContext } from "react";
// import logo from "./logo.svg";
import "./App.css";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Hidden,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LoadingSpinner from "./LoadingSpinner";
import CardList from "./CardList";

const useStyles = makeStyles((theme) => ({
  box: {
    position: "relative",
    background:
      "linear-gradient(to top, #749fd2, #749fd2 30px,  transparent 30px), repeating-linear-gradient(to bottom, transparent, transparent 40px, #ffffff 40px, #ffffff 41px), repeating-linear-gradient(to right, #fbe0dd, #fbe0dd 40px, #ffffff 40px, #ffffff 41px); ",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  boxHeading: {
    background:
      "linear-gradient(to bottom, #749fd2, #749fd2 30px, #ffffff 30px)",
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
  image: {
    position: "absolute",
    right: 0,
    bottom: -450,
    zIndex: 99,
  },
}));

function App() {
  const classes = useStyles();

  // if (fileList.length === 0) return <LoadingSpinner />;
  return (
    <Box component="div" height="100vh" className={classes.box}>
      <Box height="130px" className={classes.boxHeading}>
        <img
          style={{ paddingLeft: "20px" }}
          height="100%"
          alt="This took too long to photoshop."
          src="./akiraray_header.png"
        />
      </Box>
      <Grid container>
        <Hidden xsDown>
          <Grid container item xs={1} />
        </Hidden>
        <Grid
          container
          item
          xs={12}
          sm={9}
          md={6}
          className={classes.gridPadding}
        >
          <Card className={classes.card}>
            <CardContent className={classes.cardHeader}>
              <Typography variant="h4" className={classes.typographyHeader}>
                Sounds
              </Typography>
            </CardContent>
            <CardList />
          </Card>
        </Grid>
      </Grid>
      <Box component="div" className={classes.image}>
        <img alt="Whatchu pointing your mouse at?" src="./ray_test.png" />
      </Box>
    </Box>
  );
}

export default App;
