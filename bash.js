//Output a prompt
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd.match(/^cat/)){
    let fileName = cmd.split(' ')[1];
    cat(fileName);
  } else if (cmd.match(/^curl/)) {
    let uri = cmd.split(' ')[1];
    curl(uri);
  }


  process.stdout.write('\nYou typed: ' + cmd);
  process.stdout.write('\nprompt >'); //adds prompt to ls output weird...
});
