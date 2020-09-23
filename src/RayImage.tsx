import React from "react";

import { Box, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  imageSm: {
    position: "absolute",
    right: 0,
    bottom: -450,
    zIndex: 99,
  },
  imageMd: {
    position: "absolute",
    right: 0,
    bottom: -100,
    zIndex: 99,
  },
}));

function RayImage() {
  const classes = useStyles();
  return (
    <Box component="div">
      <Hidden smDown>
        <Box className={classes.imageMd}>
          <img
            width="100%"
            alt="Akira Ray should be here."
            src="./ray_test.png"
          />
        </Box>
      </Hidden>
      <Hidden mdUp>
        <Box className={classes.imageSm}>
          <img
            width="100%"
            alt="Akira Ray should be here."
            src="./ray_test.png"
          />
        </Box>
      </Hidden>
    </Box>
  );
}

export default RayImage;
