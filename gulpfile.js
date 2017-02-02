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

gulp.task('hard-deploy', ['soft-deploy'], function(){

    gulp.src('./img/icons/svg-defs/*.*').pipe(gulp.dest('C:/xampp/htdocs/feas/img/icons/svg-defs'));
    gulp.src('./img/prods/*.*').pipe(gulp.dest('C:/xampp/htdocs/feas/img/prods'));

});


gulp.task('soft-deploy', function(){
    gulp.src('./content/*.*').pipe(gulp.dest('C:/xampp/htdocs/feas/content'));
    gulp.src('./html/techspecs.html').pipe(gulp.dest('C:/xampp/htdocs/feas/html'));
    gulp.src('./css/*.*').pipe(gulp.dest('C:/xampp/htdocs/feas/css'));
    gulp.src('./js/*.*').pipe(gulp.dest('C:/xampp/htdocs/feas/js'));
    gulp.src('./index.html').pipe(gulp.dest('C:/xampp/htdocs/feas'));
    gulp.src('./index.php').pipe(gulp.dest('C:/xampp/htdocs/feas'));
});