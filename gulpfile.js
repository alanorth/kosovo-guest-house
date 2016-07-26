var gulp = require('gulp');

gulp.task('default', ['css', 'js']);

gulp.task('css', function() {
   gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
   .pipe(gulp.dest('./css'));
});

gulp.task('js', function() {
   gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js'])
   .pipe(gulp.dest('./js'));
});
