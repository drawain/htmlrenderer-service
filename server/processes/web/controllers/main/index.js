'use strict';

const ControllerFactory = require('boar-server').lib.controllerFactory;

module.exports = ControllerFactory.create(function(router) {
  router.get('/', ControllerFactory.load('main/get'));
  router.get('/healthcheck', function* () {
    this.body = { success: true };
  });
});
