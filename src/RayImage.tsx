import React from "react";

import { Box, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    position: "absolute",
    bottom: "-25px",
  },
  imageSm: {
    right: 0,
    zIndex: 99,
  },
  imageMd: {
    paddingLeft: "57vw",
    zIndex: 99,
  },
}));

/**
 * Renders the appropriate Ray image for the designated layout size
 */
function RayImage() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.box}>
      <Hidden smDown>
        <Box className={classes.imageMd}>
          <img alt="Akira Ray should be here." src="./akiraray_normal.png" />
        </Box>
      </Hidden>
      <Hidden mdUp>
        <Box className={classes.imageSm}>
          <img
            width="100%"
            alt="Akira Ray should be here."
            src="./akiraray_peek.png"
          />
        </Box>
      </Hidden>
    </Box>
  );
}

export default RayImage;
