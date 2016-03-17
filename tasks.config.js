'use strict';

module.exports = {
  server: {
    filePattern: ['!server/**/*.factory.*', '!server/**/*.spec.*', 'server/**/*.{html,jade,js,css}', 'package.json', 'Procfile'],
    environmentVariables: {
      DEBUG: '*',
      PORT: process.env.PORT || 8090,
      BASE_URL: process.env.BASE_URL || 'http://localhost:8090',
      APP_ROOT_PATH: './server/processes/web'
    },
    runnable: 'dist/processes/web/index.js'
  }
};
