/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
var app = new EmberApp();

app.import('vendor/firebase-simple-login/firebase-simple-login.js');
app.import('vendor/jasny-bootstrap/dist/css/jasny-bootstrap.min.css');
app.import('vendor/jasny-bootstrap/dist/js/jasny-bootstrap.min.js');
app.import('vendor/bootstrap/dist/js/bootstrap.js');
app.import('vendor/bootstrap/dist/css/bootstrap.css');
// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// module.exports = app.toTree();
var fontOpenSans = pickFiles('vendor/fontawesome', {
   srcDir: '/',
   files: ['**/*.woff', '**/*.min.css'],
   destDir: '/assets/fonts'
});

module.exports = mergeTrees([app.toTree(), fontOpenSans]);