const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const cleanCSS = require('gulp-clean-css');
const watch = require("gulp-watch");

/* Flytta HTML-filer*/
gulp.task("copyhtml",function(){
  return gulp.src("src/*.html")
  .pipe(gulp.dest("pub/"));
});

/* Flytta images */
gulp.task("copyimages",function(){
    return gulp.src("src/images")
    .pipe(gulp.dest("pub/"));
  });

/* Sammanslå och minimera CSS */
gulp.task('minify-css', function() {
    return gulp.src('src/css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('pub/css'));
  });

/* Sammanslå och minimera Javascript */
gulp.task("concminjs",function(){
  return gulp.src("src/js/*.js")
  .pipe(concat("main.min.js"))
  .pipe(uglify())
  .pipe(gulp.dest("pub/js"));
});

/* Kontrollera ändringar i filsystemet */
gulp.task("watcher",function(){
  watch ("src/js/*.js",function(){
  gulp.start("concminjs");
  });

  watch("src/*.html",function(){
  gulp.start("copyhtml");
  });

  watch("src/css/*.css",function(){
  gulp.start("minify-css");
  });

  watch("src/images",function(){
  gulp.start("copyimages");
  });
});

/* Default */
gulp.task("default",["copyhtml","concminjs","copyimages","minify-css","watcher"]);

