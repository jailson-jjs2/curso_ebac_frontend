const gulpJs = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

async function comprimeImagens () {
  const imagemin = await import('gulp-imagemin');
  return gulpJs.src('./source/img/*')
    .pipe(imagemin.default())
    .pipe(gulpJs.dest('./build/img'));
}

function comprimeJavaScript() {
  return gulpJs.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulpJs.dest('./build/scripts'))
}

function compilaSass() {
  return gulpJs.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulpJs.dest('./build/styles'));
}

exports.default = function() {
  gulpJs.watch('./source/styles/*.scss', { ignoreInitial: false }, gulpJs.series(compilaSass));
  gulpJs.watch('./source/scripts/*.js', { ignoreInitial: false }, gulpJs.series(comprimeJavaScript));
  gulpJs.watch('./source/img/*', { ignoreInitial: false }, gulpJs.series(comprimeImagens));
}

