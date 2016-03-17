'use strict';

class GetAction {

  constructor(context) {
    this._context = context;
  }

  *execute() {
    this._context.render('index');
  }
}

module.exports = function* () {
  yield (new GetAction(this)).execute();
};
