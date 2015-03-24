var browserify   = require('browserify');
var babelify     = require('babelify')
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var source       = require('vinyl-source-stream');
var uglifyify    = require('uglifyify');
var watchify     = require('watchify');

// var vendor     = require("../config/externals.js")

var destFolder = './dist';
var destFile   = "urlparser.js"
var sourceFile = './lib/urlparser.es6.js'

var testFolder = './spec';
var testFile   = "app_tests.js"
var sourceTest = './spec/app_tests.es6.js'

function bundleShare(b, destFile) {
  b.bundle()
   .on('error', function(err){
      console.log(err.message);
      this.end();
    })
   .pipe(source(destFile))
   .pipe(gulp.dest(destFolder));
}

function bundleShareTest(b, destFile) {
  b.bundle()
   .on('error', function(err){
      console.log(err.message);
      this.end();
    })
   .pipe(source(destFile))
   .pipe(gulp.dest(testFolder));
}

gulp.task("app", function () {

  var bundle = browserify({entries: [sourceFile],extensions: ['.js'], debug:false});

  bundle.transform(babelify)
  bundle.transform(uglifyify)

  return bundleShare(bundle, "urlparser.min.js")
});

gulp.task("app_test", function () {

  var bundle = browserify({entries: [sourceTest],extensions: ['.js'], debug:false});

  bundle.transform(babelify)
  bundle.transform(uglifyify)

  return bundleShareTest(bundle, testFile)
});


gulp.task('app:watch', function() {
  var b = browserify({entries: [sourceFile],extensions: ['.js'], debug:true, cache: {}, packageCache: {}, fullPaths: true});

  b.transform(babelify)
  b.on('error', gutil.log);
  b = watchify(b);
  b.on('update', function(){
    bundleShare(b, "urlparser.js");
  });

  return bundleShare(b, "urlparser.js");
})
