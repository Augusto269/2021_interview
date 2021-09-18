/* eslint-disable no-console */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

var uri = `mongodb://localhost:${process.env.MONGO_DB_PORT}/details`;

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function () {
  console.log('MongoDB database connection established successfully');
});
