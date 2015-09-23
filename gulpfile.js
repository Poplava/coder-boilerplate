var gulp = require('gulp'),
  config = require('./config'),
  less = require('gulp-less'),
  jade = require('gulp-jade'),
  autoprefixer = require('gulp-autoprefixer'),
  livereload = require('gulp-livereload');

gulp.task('less', lessTask);
gulp.task('jade', jadeTask);

function lessTask(done) {
  return gulp.src(config.less.src, { base: '.' })
    .pipe(less(config.less.less))
    .on('error', done)
    .pipe(autoprefixer(config.less.autoprefixer))
    .on('error', done)
    .pipe(gulp.dest(config.less.dest))
    .pipe(livereload());
}

function jadeTask(done) {
  return gulp.src(config.jade.src, { base: '.' })
    .pipe(jade(config.jade.jade))
    .on('error', done)
    .pipe(gulp.dest(config.jade.dest))
    .pipe(livereload());
}
