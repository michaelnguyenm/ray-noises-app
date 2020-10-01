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
import {
  DEFAULT_MEDIA_LOCATION,
  AUDIO_JSON_FILENAME,
  IPIFY_KEY,
} from "./Constants";

/**
 * The JSON file privided is a list of sections with section names
 * in English, Japanese, and Korean. For a given section, there is a
 * list of audio files.
 */
interface AudioSection {
  [key: string]: string | AudioFile[];
  en: string;
  ja: string;
  ko: string;
  audioFiles: AudioFile[];
}

/**
 * The JSON file provided also has an entry in the list of audio files
 * for the name of the file as well as the label that will be used for
 * the button in English, Japanese, and Korean
 */
interface AudioFile {
  fileName: string;
  buttonNames: {
    [key: string]: string;
    en: string;
    ja: string;
    ko: string;
  };
}

/**
 * Maps the ISO 3166 country code to the ISO 639-1 country language
 */
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

/**
 * Makes a request for a file at the given URL to play the audio
 * @param fileName The file that will be played
 */
function playAudio(fileName: string) {
  const newAudio = new Audio(url.resolve(DEFAULT_MEDIA_LOCATION, fileName));
  newAudio.play();
}

/**
 * Render the card which will hold a list of sections and buttons
 */
function CardList() {
  const classes = useStyles();
  const [fileList, setFileList]: [AudioSection[], any] = useState([]);
  const [language, setLanguage]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState(localStorage.getItem("language") || "");

  // Get json file with audio file names
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
      fetch(`https://geo.ipify.org/api/v1?apiKey=${IPIFY_KEY}`)
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

  /**
   * Renders the button for a given file
   * @param file The file information to use for the button
   */
  function renderButton(file: AudioFile) {
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

  /**
   * Renders the section for a list of files
   * @param section The section label for the list of files
   */
  function renderSection(section: AudioSection) {
    return (
      <React.Fragment>
        <Grid container item xs={12}>
          <Typography variant="subtitle1">
            {section[language] ? `${section[language]}` : section["en"]}
          </Typography>
        </Grid>
        {section.audioFiles.map((file) => renderButton(file))}
      </React.Fragment>
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
            fileList.map((file) => renderSection(file))
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CardList;
