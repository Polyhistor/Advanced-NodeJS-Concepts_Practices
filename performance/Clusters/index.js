// const cluster = require('cluster');

// is the file being executed in master mode?
// if (cluster.isMaster) {
// console.log(process.env.UV_THREADPOOL_SIZE);
// this cause Index.js to be executed again, but in a slave/child mode
// cluster.fork();
// every fork adds a new child (worker)
// cluster.fork();
// cluster.fork();
// cluster.fork();
// } else {
// I'm a child, I'm going to act like a server and do nothing else

const express = require('express');
const crypto = require('crypto');
const app = express();

app.get('/', (req, res) => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    res.send('Hi there');
  });
});

app.get('/fast', (req, res) => {
  res.send('this was fast');
});

app.listen(3000);

// }
