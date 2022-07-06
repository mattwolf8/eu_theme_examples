'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
//const uglify = require('gulp-uglify')
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', async function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./css'));
});


gulp.task('watch', async function () {
  gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});