var ngGraph = require('gulp-angular-architecture-graph');

module.exports = function(gulp){
	gulp.task('graph', function(){
	    gulp.src([ 'components/**/*.js', 'declaration/**/*.js' ])
	        .pipe(ngGraph({
	            dest: 'architecture'
	        }));
	});
};
