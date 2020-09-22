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
    borderTop: "30px solid #749fd2",
    borderBottom: "30px solid #749fd2",
    backgroundImage:
      "repeating-linear-gradient(to bottom, transparent, transparent 40px, #ffffff 40px, #ffffff 41px), repeating-linear-gradient(to right, #fbe0dd, #fbe0dd 40px, #ffffff 40px, #ffffff 41px);",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  boxHeading: {
    backgroundColor: "white",
  },
  boxPadding: {
    paddingTop: "5vh",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  image: {
    position: "absolute",
    right: 0,
    bottom: -450,
    zIndex: 99,
  },
  card: {
    // height: "50vh",
    width: "100vw",
    zIndex: 100,
  },
  cardHeader: {
    backgroundColor: "#fde5ab",
    color: "#ffffff",
  },
  typographyHeader: {
    fontFamily: "Pacifico, cursive",
  },
}));

function App() {
  const classes = useStyles();

  // if (fileList.length === 0) return <LoadingSpinner />;
  return (
    <Box component="div" height="100vh" className={classes.box}>
      <Box height="100px" className={classes.boxHeading}>
        <Typography variant="h2">Akira Ray</Typography>
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
          className={classes.boxPadding}
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
