const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sync = require('browser-sync').create();
const csso = require('gulp-csso');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const del = require('del');
const rename = require('gulp-rename');
const svgstore = require('gulp-svgstore');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');


const nunjucks = require('gulp-nunjucks-render');

const styles = () => {
  return gulp.src('./src/scss/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(gulp.dest('./build/prostobox/css'))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('./build/prostobox/css'))
    .pipe(sync.stream());
}

const scripts = () => {
  return gulp.src('./src/prostobox/js/**/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./build/prostobox/js'))
    .pipe(terser())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('./build/prostobox/js'));
}

// const html = () => {
//   return gulp.src('src/*.html')
//   .pipe(gulp.dest('build'));
// }

// exports.html = html;

const render = () => {
  return gulp.src('./src/pages/**/*.html')
  // .pipe(
  //   data(() => {
  //     return require("./app/data.json");
  //   })
  // )
  .pipe(nunjucks({
      path: ['./src/templates']
    }))
  .pipe(gulp.dest('./build'));
}

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: './build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

const reload = (done) => {
  sync.reload();
  done();
}


const sprite = () => {
  return gulp.src('./src/img/new_main_page/icons/**/*.svg')
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('./build/img/new_main_page'));
}

const clean = () => {
  return del('./build');
}

const cleanDocs = () => {
  return del('./docs');
}

const copy = () => {
  return gulp.src([
    // 'src/*.ico',
    './src/prostobox/fonts/**/*.{woff,woff2}',
    './src/img/new_main_page/**/*.{png,jpg,svg}'
  ], {
    base: 'src'
  }).pipe(gulp.dest('./build'));
}

const copyBuild = () => {
  return gulp.src([
    './src/prostobox/fonts/**/*.{woff,woff2}',
    './src/img/new_main_page/**/*.{svg}'
  ], {
    base: 'src'
  }).pipe(gulp.dest('./build'));
}

const copyImages = () => {
  return gulp.src([
    './src/img/new_main_page/**/*.{png,jpg,svg}'
  ], {
    base: 'src'
  }).pipe(gulp.dest('./build'));
}

const optimizeImages = () => {
  return gulp.src("src/img/new_main_page/**/*.{jpg,png}")
    .pipe(imagemin([
      imageminPngquant({
        strip: true,
        speed: 1,
        // quality: [0.95, 1] //lossy settings
      }),
      imagemin.mozjpeg({ progressive: true }),
    ]))
    .pipe(gulp.dest("build/img/new_main_page/"))
}

// Watcher

const watcher = () => {
  gulp.watch(['./src/scss/**/*.scss'], gulp.series(styles));
  gulp.watch(['./src/img/new_main_page/icons/*.svg'], gulp.series(sprite, reload));
  gulp.watch(['./src/img/new_main_page/**/*.{png,jpg,svg}'], gulp.series(copyImages, reload));
  gulp.watch(['./src/prostobox/js/*.js', '!./src/prostobox/js/vendor/*.js'], gulp.series(scripts, reload));
  gulp.watch(['./src/pages/**/*.html', './src/templates/**/*.html'], gulp.series(render, reload));
}

const docs = () => {
  return gulp.src('./build/**',
  {
    base: 'build'
  }).pipe(gulp.dest('./docs'));
}

const build = gulp.series(
  clean, copy, styles, scripts, render, sprite
);

exports.build = build;

const deploy = gulp.series(
  build, cleanDocs, docs
);

exports.deploy = deploy;

exports.default = gulp.series(
  clean, copy, styles, scripts, render, sprite, server, watcher
);
