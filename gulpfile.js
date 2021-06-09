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
// const webp = require('gulp-webp');
const del = require('del');
const rename = require('gulp-rename');
const svgstore = require('gulp-svgstore');

const nunjucks = require('gulp-nunjucks-render');

const stylesMin = () => {
  return gulp.src('src/scss/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(sync.stream());
}

exports.stylesMin = stylesMin;

const scripts = () => {
  return gulp.src('src/js/**/*.js')
    .pipe(concat('script.js'))
    .pipe(terser())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('build/js'));
}

exports.scripts = scripts;

const html = () => {
  return gulp.src('src/*.html')
  .pipe(gulp.dest('build'));
}

exports.html = html;

const render = () => {
  return gulp.src('src/pages/*.html')
  .pipe(nunjucks({
      path: ['src/templates']
    }))
  .pipe(gulp.dest('build'));
}

exports.render = render;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

const reload = (done) => {
  sync.reload();
  done();
}

exports.reload = reload;

const sprite = () => {
  return gulp.src('src/img/icons/**/*.svg')
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'));
}

exports.sprite = sprite;

// Watcher

const watcher = () => {
  gulp.watch('src/scss/**/*.scss', gulp.series('stylesMin'));
  gulp.watch('src/img/icons/*.svg', gulp.series('sprite', 'reload'));
  // gulp.watch('src/img/**/*.{png,jpg,svg}', gulp.series('copy', 'reload'));
  gulp.watch(['src/js/*.js', 'src/js/vendor/*.js'], gulp.series('scripts', 'reload'));
  gulp.watch(['src/pages/**/*.html', 'src/templates/**/*.html'], gulp.series('render', 'reload'));
}

const clean = () => {
  return del('build');
}

exports.clean = clean;

const cleanDocs = () => {
  return del('docs');
}

exports.clean = clean;

const copy = () => {
  return gulp.src([
    'src/*.ico',
    'src/fonts/**/*.{woff,woff2}',
    'src/img/**'
  ], {
    base: 'src'
  }).pipe(gulp.dest('build/'));
}

exports.copy = copy;

const docs = () => {
  return gulp.src('build/**',
  {
    base: 'build'
  }).pipe(gulp.dest('docs'));
}

exports.docs = docs;

const build = gulp.series(
  clean, copy, stylesMin, scripts, render, sprite
);

exports.build = build;

const deploy = gulp.series(
  build, cleanDocs, docs
);

exports.deploy = deploy;

exports.default = gulp.series(
  build, server, watcher
);
