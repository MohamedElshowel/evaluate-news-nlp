# Evaluate News with Natural Language Processing (NLP)

Web app to evaluate the NLP using Sentiment Analysis from [MeaningCloud API](https://www.meaningcloud.com/developer/sentiment-analysis).

---

## Table of Contents

- [Dependencies](#Dependencies)
- [How To Use](#How-To-Use)
- [File Structure](#File-Structure)

---

## Dependencies

To install all the application dependencies, run `npm install` on the root directory.

---

## How To Use

First, you need to set your [MeaningCloud](https://www.meaningcloud.com/developer/account/subscriptions) API Key _(aka: License Key)_ in the [`.env`](./.env) file in the root directory.
### Run the app in production mode:

* Run `npm start` to run the server and then open the browser on [`localhost:8081`](http://localhost:8081) to use the app.
* _Note that: if it is the first time to run the app, you have to run `npm run build-prod` first to have a distribution folder where the server will look for to host the app in a production environment._

### Run the app in development mode:

* To run the app in the development mode using `webpack-dev-server`, run `npm run build-dev`, it will generate build files and open the browser on [`localhost:8080`](http://localhost:8080).

### Build new production code:

* To get updated production code, run `npm run build-prod` and it will generate new files in the `dist` folder.

### Run available test cases:

* To run the available test cases using [jest](https://jestjs.io/), run `npm run test` to make sure that the production code's functionalities won't break.

---

## File Structure

- `__test__`: Test cases available.
- `dist`: The production build files.
- `src`: App's source code.
  - `client`: client-side source code.
    - `js`: JavaScript files.
    - `styles`: SASS files to style the app.
    - `views`: HTML files.
    - `index.js`: root file for the client-side code contains reference to all exported JS and SASS files.
  - `server`: Server-side (NodeJS) source code.
- `.babelrc`: Babel configuration file.
- `README.md`: Documentation file for the app.
- `webpack.dev.js`: Webpack configuration file for development mode.
- `webpack.prod.js`: Webpack configuration file for production mode.
