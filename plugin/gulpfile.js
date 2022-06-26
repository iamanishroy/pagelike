'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const browserSync = require("browser-sync").create();
const minify = require('gulp-clean-css');
const plumber = require('gulp-plumber');
const gulpEsBuild = require('gulp-esbuild')


function onError(err) {
    console.log(err);
}

gulp.task('build-css', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(minify())
        .pipe(gulp.dest('dist/css/'))
        .pipe(plumber({
            errorHandler: onError
        }))
});

gulp.task('build-js', function () {
    return gulp.src('./src/js/index.js')
        .pipe(gulpEsBuild({
            incremental: true,
            bundle: true,
            minify: true,
            sourcemap: true,
            target: [
                'es2020',
                'chrome58',
                'edge16',
                'firefox57',
                'ios10',
                'node12',
                'safari11',
            ]
        }))
        .pipe(gulp.dest('dist/js/'))
        .pipe(plumber({
            errorHandler: onError
        }))
});

// gulp.task('auto-prefix-css', function () {
//     return gulp.src('./css/**/*.css')
//         .pipe(autoprefixer({
//             cascade: false
//         }))
//         .pipe(gulp.dest('dist'))
// });

gulp.task('reload', function (cb) {
    browserSync.reload();
    cb();
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.*', gulp.series('build-css', 'build-js', 'reload'));
});