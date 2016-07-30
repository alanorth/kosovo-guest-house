var gulp = require('gulp');

gulp.task('default', ['css', 'js']);

gulp.task('css', function() {
   return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
   .pipe(gulp.dest('./css'));
});

gulp.task('js', function() {
   return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js'])
   .pipe(gulp.dest('./js'));
});
