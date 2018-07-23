const { exec } = require('child_process');
exec('npm -v', (err, stdout) => {
  if (err) throw err;
  if (parseFloat(stdout) < 5) {
    throw new Error('[ERROR: adam-website-react] You need npm version @>=5');
    // process.exit(1);
  }
});
