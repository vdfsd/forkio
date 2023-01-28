const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const minify = require("gulp-minify");

const { parallel, series } = require("gulp");
const browsersync = require("browser-sync").create();
const clean = require("gulp-clean");
const imagemin = require("gulp-imagemin");

gulp.task("clean-dist", (cb) => {
  clean("dist");
  cb();
});

gulp.task("prepare-css", (cb) => {
  gulp
    .src("./src/scss/**/*")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(concat("styles.min.css"))
    .pipe(minify())
    .pipe(gulp.dest("./dist/css"));

  cb();
});

gulp.task("prepare-reset-css", (cb) => {
  gulp
    .src("./src/lib/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(concat("reset.min.css"))
    .pipe(minify())
    .pipe(gulp.dest("./dist/css"));

  cb();
});

gulp.task("prepare-js", (cb) => {
  gulp
    .src("./src/js/*.js")
    .pipe(concat("scripts.js"))
    .pipe(minify())
    .pipe(gulp.dest("./dist/js"));

  cb();
});

gulp.task("prepare-img", (cb) => {
  gulp
    .src("./src/img/**/*.png")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/img/"));

  cb();
});

exports.build = gulp.series(
  "clean-dist",
  "prepare-css",
  "prepare-reset-css",
  "prepare-js",
  "prepare-img"
);

gulp.task("watch-files", (cb) => {
  gulp.watch(
    "./src/**/*",
    gulp.series(
      "clean-dist",
      "prepare-css",
      "prepare-js",
      "prepare-img",
      "browsersyncReload"
    )
  );
  cb();
});

gulp.task("browsersyncServe", (cb) => {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
});

gulp.task("browsersyncReload", (cb) => {
  browsersync.reload();
  cb();
});

exports.dev = series("watch-files", "browsersyncServe");
