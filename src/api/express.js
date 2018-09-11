/**
 * Module dependencies.
 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const isDevEnv = process.env.NODE_ENV !== 'production';

/**
 * Initialize application middleware.
 *
 * @method initMiddleware
 * @param {Object} app The express application
 * @private
 */
function initMiddleware(app) {
  // Showing stack errors
  app.set('showStackError', true);
  // Enable jsonp
  app.enable('jsonp callback');

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, '../public')));
}

/**
 * Configure app routes.
 *
 * @method initRoutes
 * @param {Object} app The express application
 * @private
 */

function initRoutes(app) {
  // Globbing routing files
  //pathUtils.getGlobbedPaths(path.join(__dirname, "../routes/**/*.routes.js")).forEach(function(routePath) {
  //  require(path.resolve(routePath))(app);
  //});

  require('../routes/app.routes.js')(app);
}

/**
 * Initialize the Express application.
 *
 * @method init
 * @returns {Object} the express application
 */
function init() {
  // Initialize express app
  const app = express();
  // Initialize Express middleware
  initMiddleware(app);
  initRoutes(app);
  return app;
}

module.exports.init = init;