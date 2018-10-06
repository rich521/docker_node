'use strict';
const express = require('express');
const request = require('request');

// Constants
const PORT_SERVER_2 = 3001;
const PORT_SERVER_3 = 3002;

// App
const app = express();
app.get('/', (req, res) => {
  request('http://localhost:' + PORT_SERVER_3, function (_error, _response, body) {
    res.send(body);
  });
});

app.listen(PORT_SERVER_2, () => {
  console.log(`Running on http://localhost:${PORT_SERVER_2}`);
});
