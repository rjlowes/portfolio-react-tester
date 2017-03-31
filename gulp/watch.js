var gulp = require('gulp');


gulp.task('watch', () => {
	gulp.watch('src/sass/**/*.scss', ['styles']);
	gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/index.html', ['copy:html']);
    gulp.watch('src/api/*.json', ['copy:data']);
});
