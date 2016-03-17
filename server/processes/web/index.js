'use strict';

const koa = require('koa');
const path = require('path');
const koaApp = module.exports = koa();
const config = require('../../config');
const App = require('boar-server').app;
const app = new App(koaApp);

app.addBodyParseMiddleware({ jsonLimit: '100mb' });
app.addCorsSupportMiddleware();
app.addDynamicViewMiddleware(path.join(config.root, 'views'), true);
app.loadControllers(path.join(config.root, 'controllers'));

if (!module.parent) { app.listen(config.port); }
