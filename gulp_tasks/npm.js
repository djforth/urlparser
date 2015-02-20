var gulp = require("gulp");
var babel = require("gulp-babel");
var rename = require("gulp-rename");

gulp.task("npm_build", function () {
  return gulp.src("lib/urlparser.es6.js")
    .pipe(babel())
    .pipe(rename("index.js"))
    .pipe(gulp.dest("./"));
});