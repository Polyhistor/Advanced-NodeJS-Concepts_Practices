const cluster = require('cluster');

// is the file being executed in master mode?
if (cluster.isMaster) {
  // this cause Index.js to be executed again, but in a slave/child mode
  cluster.fork();
} else {
  // I'm a child, I'm going to act like a server and do nothing else
  const express = require('express');
  const app = express();

  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.get('/', (req, res) => {
    doWork(5000);
    res.send('Hi there');
  });

  app.listen(3000);
}
