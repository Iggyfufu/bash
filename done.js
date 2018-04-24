const done = (print) => {
  process.stdout.write(print);
  process.stdout.write('\nprompt >');
};

module.exports = done;
