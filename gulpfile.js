var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  browserify = require('browserify'),
  babelify = require('babelify'),
  buffer = require('vinyl-buffer'),
  source = require('vinyl-source-stream'),
  plugins = require('gulp-load-plugins'),
  uglify = require('gulp-uglify'),
  gulpif = require('gulp-if'),
  gutil = require('gulp-util'),
  gulpSequence = require('gulp-sequence');

var config = {
  production: !!gutil.env.prod
};

gulp.task('browserSync', ['scripts'],   function() {
  browserSync.init({
    server: {
       baseDir: "./demo"
    }
  });
  gulp.watch("./js/**/**.js", ['scripts']);
  gulp.watch("./demo/css/**.css").on('change', browserSync.reload);
  gulp.watch("./demo/*.html").on('change', browserSync.reload);
});


gulp.task('scripts', () => {
  browserify({
    'entries': ['./js/index.js'],
    'debug': true,
    'paths': ['./js/'],
    'transform': [
      babelify.configure({
        'presets': ['es2015', 'react', 'stage-2']
      })
    ]
  })
  .bundle()
  .on('error', gutil.log.bind(gutil, 'Browserify Error'))
  .pipe(source('index.js'))
  .pipe(buffer())
  .pipe(gulpif(config.production, uglify()))
  .pipe(gulpif(!config.production, plugins().sourcemaps.init({
    'loadMaps': true
  })))
  .pipe(gulpif(!config.production, plugins().sourcemaps.write('.')))
  .pipe(gulp.dest('./demo/js/'))
  .pipe(gulpif(!config.production, browserSync.stream()));
});


gulp.task('default', gulpSequence('browserSync'));
