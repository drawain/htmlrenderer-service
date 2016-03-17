'use strict';

const ControllerFactory = require('boar-server').lib.controllerFactory;
const phridge = require('phridge');

let phantom = null;

phridge.spawn().then(function (_phantom) {
  phantom = _phantom;
  console.log('Phantom is working');
});

module.exports = ControllerFactory.create(function(router) {

  router.post('/api/render', function* () {
    try {
      var result = yield phantom.run(this.request.body.render, function(content) {
        var page = webpage.create();
        page.viewportSize = {
            width: 800,
            height: 400
        };

        page.content = content;

        return page.renderBase64('PNG');
      });
    } catch(e) {
      console.log('Error', e);
    }

    this.body = { imageSrc: result };

  });

  router.get('/healthcheck', function* () {
    this.body = { success: true };
  });

});
