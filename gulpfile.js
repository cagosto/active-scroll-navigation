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
  gulpSequence = require('gulp-sequence'),
  babel = require('gulp-babel-compile');

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

var srcFile = config.production ? './js/active-scroll.js' : './js/index.js';


gulp.task('scripts', () => {
  browserify({
    'entries': [srcFile],
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
  .pipe(gulpif(!config.production, plugins().sourcemaps.init({
    'loadMaps': true
  })))
  .pipe(gulpif(!config.production, plugins().sourcemaps.write('.')))
  .pipe(config.production
    ? gulp.dest('./dist')
    : gulp.dest('./demo/js/'))
  .pipe(gulpif(!config.production, browserSync.stream()));
});

gulp.task('scripts-cjs', () => {
  gulp.src('js/active-scroll.js')
    .pipe(babel({
      presets: ['es2015', 'react', 'stage-2'],
      plugins: ["transform-es2015-modules-commonjs"]
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulpSequence('browserSync'));
gulp.task('build', gulpSequence('scripts-cjs'));
