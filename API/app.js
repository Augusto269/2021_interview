/* eslint-disable no-console */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const options = {
  inflate: true,
  limit: '100kb',
};
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw(options));

const auth = require('./app/entities/auth/route/auth.route');
app.use(`/api/auth`, auth);
var port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`/api/auth`);
});
