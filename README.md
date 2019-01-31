# Web Based Particle Device Setup

This project is intended to provide a web based setup for [Particle](https://www.particle.io/) IoT devices.

**This project is currently under work and not ready for use. Check back for periodic updates.**

This project allows someone to configure a new or existing Particle device using their web browser. Particle provides great example applications for iOS and Android development, but not currently for a web based setup. The user interface for this project is modeled off of Particle's own setup application, so should feel similar. It's built using [React](https://reactjs.org/).

The goal for this application will be a way to easily setup and conifgure developer or personal devices, and people can add their own custom settings (e.g. product specific paramaters) for their various products.

Details for getting started are located below.

## Getting Set Up

After downloading or cloning, to get started run:
`npm install`

## Structure

This project contains directories for both the web portion of this setup, as well as the local file that users will need to download. This local file is necessary in order to provide a secure setup experience. Particle devices can only be setup over basic HTTP requests (no SSL), which can't be allowed from from pages using HTTPS. By serving a login and entry page over SSL, then allowing users to download a file to complete setup, we can make sure the setup process is both successful and secure.

Webpack is used to compile all assets, and the config file is located in the top level directory of this project. You can feel free to edit this according to your needs (e.g. changing output file names).
