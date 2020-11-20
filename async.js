const https = require('https');

const start = Date.now();

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

// this is interesting. Neither Node nore the Libuv have no mechanism to make network requests.
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
