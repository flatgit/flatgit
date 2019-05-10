var gulp = require('gulp');

gulp.task('default', function () {
  gulp.src('./node_modules/simplemde/dist/')
   .pipe(gulp.dest('./dist/assets'));
});


const { src, dest, parallel } = require('gulp');

function css() {
  return src('node_modules/simplemde/dist/*.css')
    .pipe(dest('static/css'))
}

function js() {
  return src('node_modules/simplemde/dist/*.js')
    .pipe(dest('static/js', { sourcemaps: true }))
}

exports.js = js;
exports.css = css;
exports.default = parallel(css, js);
