const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

console.log(process.env.UV_THREADPOOL_SIZE);

const normalFunction = () => {
  console.log('normal');
};

function doRequest() {
  https
    .request('https://www.google.com', (res) => {
      res.on('data', () => {
        res.on('end', () => {
          console.log(Date.now() - start);
        });
      });
    })
    .end();
}

function doHash() {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('Hash:', Date.now() - start);
  });
}

fs.readFile('multitask.js', 'utf8', () => {
  console.log('FS:', Date.now() - start);
});

// normalFunction();
doRequest();
doHash();
doHash();
doHash();
doHash();
