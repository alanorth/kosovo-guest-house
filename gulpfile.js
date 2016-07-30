'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css');

gulp.task('default', ['style', 'js']);

gulp.task('js', function() {
   return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js'])
   .pipe(gulp.dest('./js'));
});

gulp.task('style', function () {
   return gulp.src('scss/style.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(cleanCSS({compatibility: 'ie9'}))
          .pipe(gulp.dest('css'));
});

gulp.task('style:watch', function () {
  gulp.watch('./scss/*.scss', ['style']);
});
