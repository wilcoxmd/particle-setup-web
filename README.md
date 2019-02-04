# Web Based Particle Device Setup

A starting place for web based setup of [Particle](https://www.particle.io/) Wi-Fi devices. Built using [React](https://reactjs.org/).

## Basic Info

This project provides application template for someone to configure new or existing Particle devices using their web browser. Particle provides great example applications for iOS and Android development, but I haven't been able to find anything for a web browser based setup.

The tricky part of doing setup with a web browser is balancing security with the fact that Particle Wi-Fi devices can only send and receive information over HTTP (no SSL). This means we need a two part application-- one that can connect and authenticate a user securely, and another app that can take the user's credentials and be downloaded and run as a local file.

This repo is meant to provide a starting project structure for anyone looking to take this setup style on, and includes directories for both the web and local app. [Webpack](https://webpack.js.org/) is used to compile both applications into a single build folder, as well as compile the entire local applicaiton into a single HTML file.

There is also a pre-written server (`server.js`) that can be used to serve the production built application and allow download of the complied local app. It serves out of the build folder, so make sure you have built the application by running `npm run build` before trying to run it. Once the build is complete you can run the server using a `node server.js` command.

## Getting Set Up

After downloading or cloning, enter the directory and run:

```
npm install
```

You'll also need to setup .env files to configure any necessary enviornment variables. To get started, create one file called `production.env` and another called `development.env`. Inside both, paste:

```
SERVER=http://localhost:8080
```

This is the location that your server is currently configured to run, which you'll need if you want to test downloading the local application.

## Structure

This project contains directories for both the web portion of this setup (`./src/web-app`), as well as the local app (`./src/local-app`) that users will need to download. This local file is necessary in order to provide a secure setup experience. Particle devices can only be setup over basic HTTP requests (no SSL), which can't be allowed from from pages served using HTTPS. By serving a login and entry page over SSL, then allowing users to download a file to complete setup, we can make sure the setup process is both successful and secure.

Webpack is used to compile all assets, and the config file is located in the top level directory of this project. You can feel free to edit this according to your needs (e.g. changing output file names). There are also production and development specific config files in the `./build-utils` folder.

Since this project is just a starting point application, you'll need to manage your own sign in and authentication. Once a user is signed in and you have their Particle Token, you can inject it into the local file when your user downloads it. You'll just need to edit the `DownloadButton` component located in the web-app directory. Specifically, change the `handleClick()` method on the lines that read:

```
const newString = fileContents.replace(
        /TOKENPLACEHOLDER/,
        "<Your tokens here>"
);
```

You'll also need to create more placeholders in the local application wherever you decide they are relevant. You can see an example of this in the local app's `TestComponent`.

Finally, as you develop your local application, make sure you encode any images as base64 and include the encoded URI as the image source attribute. This will allow them to be inserted directly into the localfile. The build process should handle this automatically for any small images you include (< 8 Kb), but you'll want to encode any large images yourself with an online converter.

## Development

There is a development server with hot reloading available curtosy of [webpack-dev-server](https://github.com/webpack/webpack-dev-server). There are also scripts included to use this server to run based on the local app or the web based part of the app.

To start a dev server running the local app, run:

```
npm run dev:local
```

To start a dev server running the web app, run:

```
npm run dev:web
```

## Production

You can build the entire project (local and web apps) into a single /build folder by running

```
npm run build
```

You can also run the build files by running:

```
npm run prod
```

The app will be running at http://localhost:8080.

## Good Luck!

Good luck building your Particle powered products. If you'd like to contribute to this repo, please open a PR and I'll happily review it.
