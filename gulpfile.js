var gulp = require('gulp'),
    tasks = { },
    modules = [ 'graph', 'js', 'less', 'vendors', 'index' ];

modules.forEach(function (task) {
    tasks[task] = require('./gulp_tasks/' + task + '.js')(gulp);
});

gulp.task('watch', [ 'index' ], function () {
    gulp.watch([ 'components/**/*.html', 'components/**/*.js', 'webapp.js' ], ['js']);
    gulp.watch([ 'components/**/*.less' ], ['less']);
    gulp.watch([ 'components/index-template/template.html' ], ['index']);
});

gulp.task('default', ['watch']);
