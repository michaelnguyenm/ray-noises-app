import React, { useState, useEffect } from "react";
import url from "url";

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LoadingSpinner from "./LoadingSpinner";
import LanguageButton from "./LanguageButton";
import { DEFAULT_MEDIA_LOCATION, AUDIO_JSON_FILENAME } from "./Constants";

declare global {
  interface Window {
    REACT_APP_MEDIA_LOCATION: string | null | undefined;
  }
}

interface AudioFile {
  fileName: string;
  buttonNames: {
    [key: string]: string;
    en: string;
    ja: string;
    ko: string;
  };
}

const countryLanguageMapping: {
  [key: string]: string;
  KR: string;
  JP: string;
} = {
  KR: "ko",
  JP: "ja",
};

const useStyles = makeStyles((theme) => ({
  card: {
    // height: "50vh",
    width: "100vw",
    zIndex: 100,
  },
  cardHeader: {
    backgroundColor: "#fde5ab",
  },
  centerHeader: { display: "flex" },
  typographyHeader: {
    color: "#ffffff",
    fontFamily: "Pacifico",
  },
  typographyBox: {
    float: "left",
  },
  buttonBox: {
    float: "right",
  },
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
  const [fileList, setFileList]: [AudioFile[], any] = useState([]);
  const [language, setLanguage]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState(localStorage.getItem("language") || "");

  // Get json file with audio files
  useEffect(() => {
    fetch(url.resolve(DEFAULT_MEDIA_LOCATION, AUDIO_JSON_FILENAME))
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFileList(data);
      });
  }, []);

  // Get location based on ip address unless language has been stored locally already
  useEffect(() => {
    if (!language) {
      fetch(`https://geo.ipify.org/api/v1?apiKey=`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const countryCode: string = data?.location?.country;
          if (
            countryCode === undefined ||
            countryLanguageMapping[countryCode] === undefined
          )
            throw new Error(
              `Default to English because country ${countryCode} is not supported`
            );
          localStorage.setItem("language", countryLanguageMapping[countryCode]);
          setLanguage(countryLanguageMapping[countryCode]);
        })
        .catch((e) => {
          console.error(e);
          localStorage.setItem("language", "en");
          setLanguage("en");
        });
    } else {
      localStorage.setItem("language", language);
    }
  }, [language]);

  function renderListItem(file: AudioFile) {
    return (
      <Grid container item xs={12} sm={4} xl={3} key={file.fileName}>
        <Button
          className={classes.button}
          onClick={() => {
            playAudio(file.fileName);
          }}
        >
          {file.buttonNames[language]
            ? `${file.buttonNames[language]}`
            : file.buttonNames["en"]}
        </Button>
      </Grid>
    );
  }

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardHeader}>
        <Box component="span" className={classes.centerHeader}>
          <Typography
            display="inline"
            variant="h4"
            className={classes.typographyHeader}
          >
            Sounds
          </Typography>
          <LanguageButton
            currentLanguage={language}
            setLanguage={setLanguage}
          />
        </Box>
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container>
          {fileList.length === 0 || !language ? (
            <LoadingSpinner />
          ) : (
            fileList.map((file) => renderListItem(file))
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CardList;
