const fs = require('fs');
const done = require('./done');

const cat = (fileName) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err){
      throw err;
    }
    done(data);
  });

};

module.exports = cat;
