const gulp = require('gulp')
const babel = require('gulp-babel')

gulp.task('default', function() {
  return gulp.src('src/*.js')
    .pipe(babel({
      presets: ['@babel/env'],
      plugins: ['@babel/plugin-transform-modules-umd']
    }))
    .pipe(gulp.dest('./'))
})
