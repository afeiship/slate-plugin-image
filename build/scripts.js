(function () {
  'use strict';

  const gulp = require('gulp');
  const saveLicense = require('uglify-save-license');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@feizheng/gulp-*', '@jswork/gulp-*']
  });

  gulp.task('scripts', function () {
    return gulp.src('src/**/*').pipe(gulp.dest('dist'));
  });
})();
