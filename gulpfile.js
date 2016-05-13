const gulp = require('gulp');
const webpack = require('webpack-stream');
const protractor = require('gulp-protractor').protractor;
const exec = require('child_process').exec;
const server = require('./server.js');

var files = ['app/**/*.html', 'app/**/*.css']

gulp.task('webpack:dev', () => {
  gulp.src('app/js/entry.js')
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('static:dev', () => {
  gulp.src(files)
  .pipe(gulp.dest('./build'));
});

gulp.task('protractor', () => {
  gulp.src('protractor/spec.js')
  .pipe(protractor({
    configFile: 'protractor/protractor_config.js'
  }))
  .on('end', function() {
    process.exit();
  })
  .on('error', function(e) {
    throw e;
  });
});

gulp.task('server', () => {
  exec('node server.js');
});

gulp.task('build:dev', ['webpack:dev', 'static:dev']);

gulp.task('default', ['build:dev', 'protractor', 'server']);
