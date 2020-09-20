import React, { useState, useEffect, useContext } from "react";
// import logo from "./logo.svg";
import "./App.css";

import url from "url";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LoadingSpinner from "./LoadingSpinner";
import { DEFAULT_MEDIA_LOCATION, AUDIO_JSON_FILENAME } from "./Constants";

declare global {
  interface Window {
    REACT_APP_MEDIA_LOCATION: string | null | undefined;
  }
}

const useStyles = makeStyles((theme) => ({
  box: {
    borderTop: "30px solid #749fd2",
    borderBottom: "30px solid #749fd2",
    backgroundImage:
      "repeating-linear-gradient(to bottom, transparent, transparent 40px, #ffffff 40px, #ffffff 41px), repeating-linear-gradient(to right, #fbe0dd, #fbe0dd 40px, #ffffff 40px, #ffffff 41px);",
  },
  boxPadding: {
    paddingTop: "10vh",
  },
  card: {
    height: "50vh",
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
  const [fileList, setFileList] = useState([]);
  useEffect(() => {
    fetch(url.resolve(DEFAULT_MEDIA_LOCATION, AUDIO_JSON_FILENAME))
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFileList(data);
      });
  }, []);

  if (fileList.length === 0) return <LoadingSpinner />;
  return (
    <Box component="div" height="100vh" className={classes.box}>
      <Grid container>
        <Grid container item xs={1} />
        <Grid container item xs={4} className={classes.boxPadding}>
          <Card className={classes.card}>
            <CardContent className={classes.cardHeader}>
              <Typography variant="h3" className={classes.typographyHeader}>
                test
              </Typography>
            </CardContent>
            <Typography variant="h5">{process.env.NODE_ENV}</Typography>
            <Typography variant="h5">{`Hostname: ${window.REACT_APP_MEDIA_LOCATION}`}</Typography>
            <Typography variant="h5">{`DEFAULT_MEDIA_LOCATION: ${url.resolve(
              DEFAULT_MEDIA_LOCATION,
              AUDIO_JSON_FILENAME
            )}`}</Typography>
            <Typography variant="h5">{fileList.toString()}</Typography>
            <Button color="primary">Test</Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
