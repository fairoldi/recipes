let gulp = require("gulp");
let sass = require("gulp-sass");

gulp.task("default", function() {
  // place code for your default task here
});

gulp.task("sass", function() {
  gulp
    .src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css/"));
});
