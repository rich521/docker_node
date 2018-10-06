'use strict';
const express = require('express');
const redis = require('redis');
const { promisify } = require('util');


const client = redis.createClient({
  // home server
  host: '192.168.0.19',
  port: 32776,
});
const getAsync = promisify(client.get).bind(client);
const PORT = 3002;
const REDIS_KEY = 'test_2';
const app = express();

// http://localhost:3002
app.get('/', async (req, res) => {
  const value = await getAsync(REDIS_KEY);
  res.send(value);
});

app.listen(PORT, () => {
  console.log(`Running server 3 on http://localhost:${PORT}`);
});

client.on('error', function (err) {
  console.log('Error ' + err);
});

