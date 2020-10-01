import React from "react";

import { Box, Hidden, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  boxHeading: {
    background:
      "linear-gradient(to bottom, #749fd2, #749fd2 30px, #ffffff 30px)",
    overflowY: "hidden",
  },
  boxLogo: {
    float: "left",
  },
  boxFloatLeft: {
    paddingTop: "30px",
    height: "99px",
    float: "left",
  },
  boxFloatRight: {
    height: "99px",
    float: "right",
  },

  boxDottedLine: {
    height: "129px",
    background:
      "repeating-linear-gradient(to bottom, transparent, transparent 3px, #749fd2 3px, #749fd2 6px)",
    float: "left",
  },
}));

function Heading() {
  const classes = useStyles();

  return (
    <Box
      component="div"
      height="129px"
      width="100%"
      className={classes.boxHeading}
    >
      <Box component="div" height="100%" className={classes.boxLogo}>
        <Link
          target="_blank"
          rel="noopener"
          href="https://www.youtube.com/channel/UC7hffDQLKIEG-_zoAQkMIvg?sub_confirmation=1"
        >
          <img
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
            height="100%"
            alt="Akira Ray Channel"
            src="./akiraray_header.png"
          />
        </Link>
      </Box>
      <Box component="div" width="3px" className={classes.boxDottedLine} />
      <Hidden xsDown>
        <Box component="div" width="1px" className={classes.boxFloatLeft}>
          <Link
            target="_blank"
            rel="noopener"
            href="https://twitter.com/search?q=%23Ray_live&src=hashtag_click"
          >
            <img
              style={{ paddingLeft: "15px", height: "30px" }}
              alt="Akira Ray Live"
              src="./akiraray_twitter_tag_live.png"
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener"
            href="https://twitter.com/search?q=%23Ray_art&src=hashtag_click"
          >
            <img
              style={{ paddingLeft: "15px", height: "30px" }}
              alt="Akira Ray Art"
              src="./akiraray_twitter_tag_art.png"
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener"
            href="https://twitter.com/RayAkira2434"
          >
            <img
              style={{ paddingLeft: "15px", height: "30px" }}
              alt="Akira Ray Twitter"
              src="./akiraray_twitter_full.png"
            />
          </Link>
        </Box>
      </Hidden>
      <Hidden smUp>
        <Box className={classes.boxFloatLeft}>
          <Link
            target="_blank"
            rel="noopener"
            href="https://twitter.com/RayAkira2434"
          >
            <img
              style={{
                paddingLeft: "0px",
                height: "33px",
              }}
              alt="Akira Ray Twitter"
              src="./akiraray_twitter.png"
            />
          </Link>
        </Box>
      </Hidden>
      <Hidden smDown>
        <Box className={classes.boxFloatRight}>
          <img
            style={{
              height: "100%",
            }}
            alt="Akira Ray"
            src="./akiraray_header_right.png"
          />
        </Box>
      </Hidden>
    </Box>
  );
}

export default Heading;
