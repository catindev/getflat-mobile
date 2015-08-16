var gulp = require('gulp');

gulp.task('watch', [ 'index' ], function () {
    gulp.watch([ 'components/**/*.html', 'components/**/*.js', 'webapp.js' ], ['js']);
    gulp.watch([ 'components/**/*.less' ], ['less']);
    gulp.watch([ 'components/index-template/template.html' ], ['index']);
});
