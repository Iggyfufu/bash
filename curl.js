const request = require('request');
const done = require('./done');

const curl = (uri) => {
  console.log(uri);
  request(uri, (err, response, body) => {
    if (err) throw err;
    done(body)
  });
};

module.exports = curl;
