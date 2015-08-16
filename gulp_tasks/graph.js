var gulp = require('gulp');
var ngGraph = require('gulp-angular-architecture-graph');

gulp.task('graph', function(){
		gulp.src([ 'components/**/*.js', 'declaration/**/*.js' ])
				.pipe(ngGraph({
						dest: 'architecture'
				}));
});
