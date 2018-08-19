var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('style', function () {
  return gulp.src('app/style/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});
 

gulp.task('html', function () {
  return gulp.src('app/index.html')
  .pipe(gulp.dest('build'));
});




gulp.task("default", ['style', 'html']);

gulp.task('watch', function(){
	gulp.watch('app/*.html', ['html']);
	gulp.watch('app/style/*.scss', ['style']);
});



