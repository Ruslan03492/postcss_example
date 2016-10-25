var postcss = require('gulp-postcss');
var gulp = require('gulp');
var use = require('postcss-use');
// var pixrem  = require('pixrem');
var precss = require('precss');
// var cssnext = require('cssnext');
// var autoprefixer = require('autoprefixer');


gulp.task('default', ['watch']);

gulp.task('watch', function() {
  gulp.watch('css/*', ['postcss']);
});

gulp.task('postcss', function () {
  var processors = [
    precss,
    use({ modules: ['autoprefixer', 'cssnext']})
  ];
  return gulp.src('css/*')
    .pipe(postcss(processors))
    .pipe(gulp.dest('new-css'));
});
