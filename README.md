# Ray Noises App

A simple soundboard application created as a joke for the Nijisanji KR VTuber, [Ray Akira](https://www.youtube.com/channel/UC7hffDQLKIEG-_zoAQkMIvg), but also for me to learn using React local storage, handling multilingual user interfaces, and using Typescript. I personally host the webapp at [rayakiranois.es](https://rayakiranois.es).

## Getting Started

The primary way to use this web application is with [Docker](https://www.docker.com/), however it is possible to run the script standalone with [Node.js](https://nodejs.org/).

### Prerequisites

One of the following can be used but Docker is recommended. Follow the instructions in the Docker documentation to install Docker on the system of your choice.

- [Docker](https://www.docker.com/)
- [The image on Docker Hub](https://hub.docker.com/r/michaelnguyenm/ray-noises-app)
- [Node.js (optional)](https://nodejs.org/): If not using Docker, just run with npm start after pulling the repository.

The image can be pulled from docker using the following command:

    docker pull michaelnguyenm/ray-noises-app:latest

### Building

Building the application can be done with docker. The following command will build it with the tag "ray-noises-app:latest" for the current directory:

    docker build -t ray-noises-app:latest .

This application can also be built with just Node.js using the following command (also seen in the package.json file):

    npm build

### Running

Building the application can be done with docker. The following command will run the application with the name "ray-noises-app" with the external port "1338" from the internal port "80."

    docker run --name ray-noises-app -p 1338:80 -d michaelnguyenm/ray-noises-app:latest

This application can also be run with just Node.js using the following command (also seen in the package.json file):

    npm start

### Options

The following environment variables can be used at run-time with the docker image:

```
MEDIA_LOCATION: Default is the public folder
Set this value to the base URL that holds an audio.json file seen in the public folder as an example.
CORS must be enabled for the location.
IPIFY_KEY: Default is "", an empty sting
Set this value to the key provided by geo.ipify.org to check geolocation,
otherwise the app will default to English.
```

An example command to run the app with the same name as above, change out the example url and fake key with your actual information:

    docker run -e MEDIA_LOCATION=https://yoururl.goeshere -e IPIFY_KEY=YOURKEY --name ray-noises-app -p 1338:80 -d michaelnguyenm/ray-noises-app:latest

As a note, geolocation by IP is blocked by some browsers by default, and IPIFY only gives 1000 free queries per month. If the app does not get the expected json result from IPIFY, any error will result in the language set to English. CORS has not completely been tested since my deployed application resources all come from the included public folder.

## Adding Sounds and Contributing

Contributing is a matter of just submitting a pull request with the required file changes in the following sections. In the future, I might make a form for requesting certain lines/sounds to be added as well.

### JSON File Format

Under the public folder, there is an audio.json file. This file contains information on various audio files, including the file name, the source of the audio, and how the button in the UI should be labeled for the audio file. An example of how the json file is formatted:

```yaml
[
  {
    "en": "SECTION_ENGLISH",
    "ja": "SECTION_日本語",
    "ko": "SECTION_일본어",
    "audioFiles":
      [
        {
          "fileName": "FILE_NAME",
          "buttonNames":
            {
              "en": "BUTTON_ENGLISH",
              "ja": "BUTTON_日本語",
              "ko": "BUTTON_일본어",
            },
          "source": "YOUTUBE_URL",
          "timeStart": "HH:MM:SS.MMM",
          "timeEnd": "HH:MM:SS.MMM",
        },
      ],
  },
]
```

There can be multiple sections and multiple audio files under each section. The default for sections as well as button names is en/English. Source URLs are provided to the original youtube videos in the json file, but they are not required. The timeStart and timeEnd are timestamps that can be used in Audacity to get the exact clip that I used, but are also not required for the app to work.

### Audio File Processing

I have chosen to use mp3 because it's virtually compatible with every browser and can be outputted by Audacity. The following steps were used to produce the sound files:

1. Use [youtube-dl](https://ytdl-org.github.io/youtube-dl/index.html) to obtain the YouTube video. You can use the -x flag to save it as only an audio file.
2. Open the audio file in [Audacity](https://www.audacityteam.org/). If there are issues importing, you might need to get FFmpeg as instructed by Audacity.
3. Select the areas you want to clip in the track. I like to create new clips by using Edit>Clip Boundaries>Split New.
4. There a number of ways to remove background noise in the effects. Here are two ways:

- Select an area in the track where Ray isn't talking and use Effect>Noise Reduction and then sample the area. After that apply the background noise effect on the clip you want.
- Use Effect>Vocal Reduction and Isolation and play around with the settings until you get a desirable result. There are no suggested settings I can give here.

5. Use Effect>Normalize to set the audio level to -20.0dB as that is what most of the sound bites are set to.
6. Select the clip that you want to output by double-clicking on it. Use File>Export>Export Selected Audio and export it as an MP3 file with the default settings.
7. Be sure to mark down the timestamps from Audacity in the json file for future reference.

Feel free to submit a pull request with the new files. There is no automated testing so I have to verify everything unfortunately.

## Contact

If you have any questions, I can be contacted on Twitter [@thewiggles_jpd](https://twitter.com/TheWiggles_jpd).
