const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const minifyJS = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const imagemin = require('gulp-imagemin');


function sync(){
    return browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
}

function remove(){
    return del(['dist/css', 'dist/js', 'dist/images', 'dist/**/*.html'])
}

function styles() {
    return gulp.src("src/scss/**/**.scss")
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(autoprefixer())
    .pipe(concat("app.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
}

function javascript(){
    return gulp.src("src/js/**/*.js")
    .pipe(concat("app.min.js"))
    .pipe(minifyJS())
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
}

function html(){
    return gulp.src("src/**/*.html")
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
}

function images(){
    return gulp.src("src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"))
    .pipe(browserSync.stream());
}

function watching(){
    gulp.watch("src/**/*.html",html)
    gulp.watch("src/images/**/*",images)
    gulp.watch("src/js/**/*.js",javascript)
    gulp.watch("src/scss/**/*.scss",styles)
}


  var build = gulp.series(remove, gulp.parallel(html, styles, javascript, images, sync, watching));


exports.styles = styles;
exports.javascript = javascript;
exports.html = html;
exports.watching = watching;
exports.images = images;
exports.build = build;
exports.default = build;



