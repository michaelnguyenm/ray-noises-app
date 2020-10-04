# Ray Noises App

A simple soundboard application created as a joke for the Nijisanji KR VTuber, [Ray Akira](https://www.youtube.com/channel/UC7hffDQLKIEG-_zoAQkMIvg), but also for me to learn using React local storage, handling multilingual user interfaces, and using Typescript. I personally host the webapp at...

## Getting Started

The primary way to use this web application is with [Docker](https://www.docker.com/), however it is possible to run the script standalone with [Node.js](https://nodejs.org/).

### Prerequisites

One of the following can be used but Docker is recommended. Follow the instructions in the Docker documentation to install Docker on the system of your choice.

- [Docker](https://www.docker.com/)
- [The image on Docker Hub](https://hub.docker.com/r/michaelnguyenm/ray-noises-app)
- [Node.js (optional)](https://nodejs.org/): If not using Docker, just run with npm start after pulling the repository.

The image can be pulled from docker using the following command:

    docker pull michaelnguyenm/ray-noises-app

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
Set this value to the base URL that holds an audio.json file seen in the public folder as an example. CORS must be enabled.
IPIFY_KEY: Default is "", an empty sting
Set this value to the key provided at [IPIFY](https://www.ipify.org/) to check geolocation, otherwise the app will default to English.
```

An example command to run the app with the same name as above, change out the example url and fake key with your actual information:

    docker run -e MEDIA_LOCATION=https://yoururl.goeshere -e IPIFY_KEY=YOURKEY --name ray-noises-app -p 1338:80 -d michaelnguyenm/ray-noises-app:latest

As a note, geolocation by IP is blocked by some browsers by default, and IPIFY only gives 1000 free queries per month. CORS has not completely been tested since the application resources all come from the public folder.

### Contact

If you have any questions, I can be contacted on Twitter [@thewiggles_jpd](https://twitter.com/TheWiggles_jpd).
