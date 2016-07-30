'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('default', ['scss', 'js']);

gulp.task('css', function() {
   return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
   .pipe(gulp.dest('./css'));
});

gulp.task('js', function() {
   return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js'])
   .pipe(gulp.dest('./js'));
});

gulp.task('scss', function () {
   return gulp.src('scss/style.scss')
          .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
          .pipe(gulp.dest('css'));
});

gulp.task('scss:watch', function () {
  gulp.watch('./scss/*.scss', ['scss']);
});
