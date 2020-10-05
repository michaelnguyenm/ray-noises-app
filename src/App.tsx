import React, { useRef, useEffect } from "react";

import { Box, Grid, Hidden, Typography } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
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
  boxFooter: {
    position: "absolute",
    left: "3px",
    bottom: "3px",
  },
  boxFooterRight: {
    position: "absolute",
    right: "0px",
    bottom: "0px",
  },
  grid: {
    paddingTop: "5vh",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
}));

/**
 * Renders the application
 */
function App() {
  const classes = useStyles();
  const scrollInto = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollInto?.current) scrollInto.current.scrollIntoView();
  });

  return (
    <Box component="div" height="100vh" className={classes.box}>
      <Heading />
      <Grid container>
        {/* Padding for sizes above xs */}
        <Hidden xsDown>
          <Grid container item xs={1} />
        </Hidden>
        <Grid container item xs={12} md={6} className={classes.grid}>
          <CardList />
        </Grid>
      </Grid>
      <RayImage />
      <Box {...({ ref: scrollInto } as any)} className={classes.boxFooter}>
        <Typography>Unofficial fansite - 非公式ファンサイトです</Typography>
      </Box>
      {/* This has intentionally been hidden to prevent self-promotion on the public website. */}
      <Hidden xsUp implementation="css">
        <Box className={classes.boxFooterRight}>
          <a href="https://github.com/michaelnguyenm/ray-noises-app">
            <GitHub />
          </a>
        </Box>
      </Hidden>
    </Box>
  );
}

export default App;
