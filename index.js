'use strict';

var through = require('through2');
var pug = require('pug');
var pugPhp = require('pug-php');
var ext = require('gulp-util').replaceExtension;
var PluginError = require('gulp-util').PluginError;

pugPhp(pug);

function handleCompile(contents, opts){
  return pug.compile(contents, opts)(opts.locals || opts.data);
}

function handleExtension(filepath, opts) {
  return ext(filepath, opts.extension || '.php');
}

module.exports = function(options) {
  var opts = options || {};

  function compile(file, enc, cb) {
    opts.filename = file.path;

    if (file.data) {
      opts.data = file.data;
    }

    file.path = handleExtension(file.path, opts);

    if(file.isStream()){
      return cb(new PluginError('gulp-pug-php', 'Streaming not supported'));
    }

    if(file.isBuffer()){
      try {
        file.contents = new Buffer(handleCompile(String(file.contents), opts));
      } catch(e) {
        return cb(new PluginError('gulp-pug-php', e));
      }
    }
    cb(null, file);
  }

  return through.obj(compile);
};
