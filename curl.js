const request = require('request');

const curl = (uri) => {
  console.log(uri);
  request(uri, (err, response, body) => {
    if (err) throw err;
    process.stdout.write(JSON.stringify(response));
    process.stdout.write(body);
    process.stdout.write('\nprompt >');
  });
};

module.exports = curl;
