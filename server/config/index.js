'use strict';

const path = require('path');

module.exports = {
  root: path.normalize(__dirname + '/../processes/web'),
  env: process.env.NODE_ENV,
  ip: process.env.IP || undefined,
  port: process.env.PORT || 8090
};
