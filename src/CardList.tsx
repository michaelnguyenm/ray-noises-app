import React, { useState, useEffect } from "react";
import url from "url";

import { Button, CardContent, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LoadingSpinner from "./LoadingSpinner";
import { DEFAULT_MEDIA_LOCATION, AUDIO_JSON_FILENAME } from "./Constants";

declare global {
  interface Window {
    REACT_APP_MEDIA_LOCATION: string | null | undefined;
  }
}

interface AudioFile {
  fileName: string;
  buttonNames: { en: string; ja: string; ko: string };
}

const useStyles = makeStyles((theme) => ({
  cardContent: {
    minHeight: "45vh",
    maxHeight: "45vh",
    overflow: "auto",
  },
  button: {
    width: "100%",
    height: "100%",
  },
}));

function playAudio(fileName: string) {
  const newAudio = new Audio(url.resolve(DEFAULT_MEDIA_LOCATION, fileName));
  newAudio.play();
}

function CardList() {
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

  function renderListItem(file: AudioFile) {
    return (
      <Grid container item xs={12} sm={4} xl={3} key={file.fileName}>
        <Button
          className={classes.button}
          onClick={() => {
            playAudio(file.fileName);
          }}
        >
          {file.buttonNames.en}
        </Button>
      </Grid>
    );
  }

  if (fileList.length === 0) return <LoadingSpinner />;
  return (
    <CardContent className={classes.cardContent}>
      <Grid container>{fileList.map((file) => renderListItem(file))}</Grid>
    </CardContent>
  );
}

export default CardList;
