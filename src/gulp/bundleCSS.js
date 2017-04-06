var gulp = require('gulp');
var sass = require('gulp-sass');
// var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

function bundleCSS(entry, dest) {
  return gulp.src(entry)
  // .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('app.css'))
  // .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(dest))
}

module.exports = bundleCSS;
