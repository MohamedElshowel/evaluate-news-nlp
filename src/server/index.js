var path = require('path')
const express = require('express')
const fetch = require('node-fetch');
const FormData = require('form-data');

const dotenv = require('dotenv');
dotenv.config();

const workboxBuild = require('workbox-build');

const buildServiceWorker = () => {
  // This will return a Promise
  return workboxBuild.generateSW({
    globDirectory: 'dist',
    globPatterns: [
      '**/*.{html,json,js,css}',
    ],
    swDest: 'dist/service-worker.js',
  });
};

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})

app.get('/meaning', function (req, res) {

  buildServiceWorker();

  if (process.env.API_KEY) {

    const formData = new FormData();
    formData.append("key", process.env.API_KEY);
    formData.append("txt", req.query.text || "");
    formData.append("lang", "en");  // language code like: [en, es, fr, ... ]

    const requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow'
    };

    fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
      .then(response => ({
        status: response.status,
        body: response.json()
      }))
      .then(({ status, body }) => body.then(data => {
        res.send(data);
      }))
      .catch(error => console.log('error', error));

  } else {
    console.log("Missing an API Key for MeaningCloud API, please add `API_KEY` in `.env` file");
  }

})
