'use strict';

const express = require('express');
const request = require('request');
const redis = require('redis');

const client = redis.createClient({
  host: '192.168.0.19',
  port: 32776,
});
const PORT = 3000;
const PORT_SERVER_2 = 3001;
const REDIS_KEY = 'test_2';

client.set(REDIS_KEY, 'Persisting in QNAP!!', redis.print);

const app = express();
app.get('/', (req, res) => {
  request('http://localhost:' + PORT_SERVER_2, function (error, response, body) {
    res.send(body);
  });
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
