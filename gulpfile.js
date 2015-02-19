var gulp       = require('gulp');
var requireDir = require('require-dir');
var dir        = requireDir('./gulp_tasks');

var stripDebug = require('gulp-strip-debug');

gulp.task('console_strip', function () {
  return gulp.src('./dist/urlparse.js')
        .pipe(stripDebug())
        .pipe(gulp.dest('./app/assets/javascripts/'));
});

gulp.task('build', ["app", "console_strip"])
gulp.task('main', ["app:watch", "karma"])