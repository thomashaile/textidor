'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const config = require('./config');

// - setup -
const FILES_DIR = __dirname + '/text-files';
// create the express app
_;

// - use middleware -
// allow Cross Origin Resource Sharing
app.use(cors());
// parse the body
_;

// https://github.com/expressjs/morgan#write-logs-to-a-file
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' }
);
app.use(morgan('combined', { stream: accessLogStream }));
// and log to the console
app.use(morgan('dev'));

// statically serve the frontend
_;

// - declare routes -

// read all file names
app._('_', (req, res, next) => {
  fs._(FILES_DIR, (err, list) => {
    if (_) {
      res.status(404).end();
      _;
    }
    if (err) {
      // https://expressjs.com/en/guide/error-handling.html
      next(err);
      return;
    }

    res.json(list);
  });
});

// read a file
app._('_', (req, res, next) => {
  const fileName = req.params.name;
  fs._(`${FILES_DIR}/${fileName}`, _, (err, fileText) => {
    if (_) {
      _;
      return;
    }
    if (_) {
      _;
      _;
    }

    const responseData = {
      name: fileName,
      text: fileText,
    };
    res.json(responseData);
  });
});

// write a file
app._('_', (req, res, next) => {
  const fileName = _;
  const fileText = _;
  fs._(`${FILES_DIR}/${fileName}`, _, err => {
    if (_) {
      _;
      _;
    }

    // https://stackoverflow.com/questions/33214717/why-post-redirects-to-get-and-put-redirects-to-put
    res.redirect(303, '/files');
  });
});

// delete a file
app._('_', (req, res, next) => {
  const fileName = _;
  fs._(`${FILES_DIR}/${fileName}`, err => {
    if (err && err.code === 'ENOENT') {
      _;
      _;
    }
    if (_) {
      _;
      _;
    }

    res.redirect(303, '/files');
  });
});

// - handle errors in the routes and middleware -

// https://expressjs.com/en/guide/error-handling.html
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).end();
});

// - open server -
// try to exactly match the message logged by demo.min.js
_;
