import React from "react";

import { Box, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  image: {
    position: "absolute",
    right: 0,
    bottom: -450,
    zIndex: 99,
  },
}));

function RayImage() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.image}>
      <img alt="Akira Ray should be here." src="./ray_test.png" />
    </Box>
  );
}

export default RayImage;
