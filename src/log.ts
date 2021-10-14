/**
 * make a log directory, just in case it isn't there.
 */
try {
  require('fs').mkdirSync('./log');
} catch (e) {
  if (e.code != 'EEXIST') {
    console.error('Could not set up log directory, error was: ', e);
    process.exit(1);
  }
}

var log4js = require('log4js');
console.log(Object.keys(Object.prototype));

var config = require('../log4js.json');

log4js.configure(config);
