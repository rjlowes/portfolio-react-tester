'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass');


gulp.task('styles', () => 
	gulp.src('./src/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/styles')));