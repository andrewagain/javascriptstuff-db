const babel = require('./babel');
const coffeescript = require('./coffeescript');
const cssModules = require('./cssModules');
const es6 = require('./es6');
const flux = require('./flux');
const hmr = require('./hmr');
const inlineStyle = require('./inlineStyle');
const linter = require('./linter');
const liveReload = require('./liveReload');
const minimal = require('./minimal');
const mobx = require('./mobx');
const rails = require('./rails');
const reactNative = require('./reactNative');
const reactRouter = require('./reactRouter');
const redux = require('./redux');
const tests = require('./tests');
const typescript = require('./typescript');
const universal = require('./universal');
const webpack = require('./webpack');
const webpack2 = require('./webpack2');

const tags = [
  babel,
  coffeescript,
  cssModules,
  es6,
  flux,
  hmr,
  inlineStyle,
  linter,
  liveReload,
  minimal,
  mobx,
  rails,
  reactNative,
  reactRouter,
  redux,
  tests,
  typescript,
  universal,
  webpack,
  webpack2,
];
module.exports = tags;
