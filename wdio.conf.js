const defaults = require('./wdio.common.conf.js').config;
const _ = require('lodash');

exports.local = {
  services: [ 'selenium-standalone' ]
};

exports.config = _.defaultsDeep(exports.local, defaults);
