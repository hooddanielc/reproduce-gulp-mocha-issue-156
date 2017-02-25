const register = require('babel-core/register');

const gulp = require('gulp');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');

gulp.task('test-with-suggested', () => {
  gulp.src('./src/**/*.js')
    .pipe(mocha({
      compilers: {
        js: 'js:babel-core/register'
      }
    }));
});

gulp.task('test-with-js-property', () => {
  gulp.src('./src/**/*.js')
    .pipe(mocha({
      compilers: {
        js: 'js:babel-core/register'
      }
    }));
});


gulp.task('test-with-register', () => {
  gulp.src('./src/**/*.js')
    .pipe(mocha({
      compilers: {
        js: register
      }
    }));
});

gulp.task('test-with-babel', () => {
  gulp.src('./src/**/*.js')
    .pipe(mocha({
      compilers: {
        js: babel
      }
    }));
});
