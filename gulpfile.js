const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();
const svgSymbols = require('gulp-svg-symbols');

// Compile LESS files from /less into /css
gulp.task('less', function() {
    return gulp.src('less/feas.less')
        .pipe(less())
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
    })
})

// Run everything
gulp.task('default', ['less', 'dev']);

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'less'], function() {

    gulp.watch('less/*.less', ['less']);

    gulp.watch('js/*.js', browserSync.reload);
    gulp.watch('css/*.css', browserSync.reload);
    gulp.watch('./*.html', browserSync.reload);

});

gulp.task('build-svg-defs', function () {

  return gulp.src('img/icons/*.svg')
    .pipe(svgSymbols())
    .pipe(gulp.dest('img/icons/svg-defs'));

});