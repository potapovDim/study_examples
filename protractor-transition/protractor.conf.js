const {FROM_BUILD} = process.env;

let conf = null;

if (FROM_BUILD) {
  conf = require('./built/configs/protractor.conf');
} else {
  require('ts-node').register({
    app: './'
  });
  conf = require('./configs/protractor.conf');
}

module.exports = conf;
