# REACT BOILER PLATE

##

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This is a basic react boilerplate. it has a higher level of configuration
for projects.

## Features

- Already setup router
- Error boundary
- Simplified import statements
- Lazy loading images & components
- Built in modal (using profilers)
- Setuped with lang provider, auth provider
- Sdded react helmet
- many more...

## Tech

Dillinger uses a number of open source projects to work properly:

- [reactjs]
- [react] -
- [javascript] - for writing business logic
- [jsx] - for writing components
- [Bootstrap] - great UI boilerplate for modern web apps
- [ReactIcons] - for supporting rich icons

## Installation

Install the dependencies and devDependencies and start the server.

```sh
npm i
```

## Development

To run project locally

```sh
npm start
```

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
http://localhost:3000
```

## Production build

For generating prodcution build

```sh
npm run build
```

## Dependencies

dev & prod both

| Plugin           |
| ---------------- |
| md               |
| react-helment    |
| axios            |
| react-router-dom |
| yup              |
| react-hook-form  |
| react-toastify   |

## Plugins

react boilerplate is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin             |
| ------------------ |
| prettierrc         |
| eslint             |
| simple import sort |

---

## Guide

- ### Global
  - Mention you Application name in constants/index.js -> APP_NAME= "your app name"
  - id there is Mention Base url of API's in Utils/url.js -> BASE_URL='/'
  - if there is then Mention Image Base url of API's in Utils/url.js -> BASE_URL='/'
- ### Components
  - component name always start from capital latter in should be in form of camelcase
  - if there is styling associated with it use moduler.css
  - export your newly component file using components/index.js file
- ### Assets
  - place your asset into assests folder
  - use lazy loaded image components instead of using default <img /> tag
- ### Routings
  - no need to create any route
  - mention your routh path & components in PATHS array. you'll be good to good
- ### Optimization
  - Think before installing any third party packages. The framework itself loaded with all neccessary packages
  - see examples you didn't understand anything.
- ### Hooks
  - use hooks for your purpose
  - all type of hook is available in framework
