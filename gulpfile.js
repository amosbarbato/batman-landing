const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles () {
    return gulp.src('./src/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist'));
}

function images () {
    return gulp.src('./lib/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);


exports.watch = function() {
    gulp.watch('./src/*.scss', gulp.parallel(styles))
}