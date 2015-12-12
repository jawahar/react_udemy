var gulp = require('gulp');
var gutil = require ('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var source = require('source-stream');


gulp.task('default', function() {

  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: ['reactify'],
    extension: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify error'))
        .pipe(source('main.js'))
        .pipe(gulp.dest('./'));
  };

  build();
  bundler.on('update', build);

});
