var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');

var fs = require("fs");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var runSequence = require('run-sequence');
var requireDir = require('require-dir');

const browserSync = require('browser-sync').create();

requireDir('./gulp');

// http://jpsierens.com/tutorial-gulp-javascript-2015-react/

gulp.task('scripts', () => 
    browserify("./src/js/main.js", {debug: true})
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(source('main.build.js'))
        .pipe(gulp.dest("./dist/js")));


gulp.task('copy:html', () => 
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist')));

gulp.task('copy:data', () => 
    gulp.src('./src/api/*.json')
        .pipe(gulp.dest('./dist/api')));


// gulp.task('watch', function(){
//     gulp.watch('src/js/**/*.js', ['scripts']);
//     gulp.watch('src/index.html', ['copy:html']);
//     gulp.watch('src/api/*.json', ['copy:data']);
// });


gulp.task('server', function () {

    browserSync.init({
        // Control panel
        ui: {port: 9999},
        // Watched files
        // http://www.browsersync.io/docs/options/#option-files
        files: [
            // TODO globbing
            './dist/*.html',
            './dist/**/*.js'
        ],
        // Use the static server
        // http://www.browsersync.io/docs/options/#option-server
        server: {
            baseDir: ['./dist'],
            port: 3000,
            open: true
        }
    });
});

gulp.task('default', () => 
    runSequence('copy:html', 'copy:data', 'scripts', 'styles', 'server', 'watch'));

