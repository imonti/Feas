var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

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
gulp.task('default', ['less', 'copy']);

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'less'], function() {
    gulp.watch('less/*.less', ['less']);

    // Reloads the browser whenever HTML or JS files change
    gulp.watch('js/*.js', browserSync.reload);
    gulp.watch('css/*.css', browserSync.reload);
    gulp.watch('html/*.html', browserSync.reload);
});
