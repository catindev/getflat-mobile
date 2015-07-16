var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var cssBase64 = require('gulp-css-base64');

module.exports = function (gulp) {
	gulp.task('less', function() {
	    return  gulp.src([ 'components/**/*.less' ])
			.pipe(cssBase64())
	    .pipe(concat('build.less'))
			.pipe(less({ paths: [  __dirname.replace('/gulp_tasks','') + '/components/table-grid' ]}))
	    .pipe(autoprefixer('last 10 versions', 'ie 9'))
	    .pipe(minifyCSS({keepBreaks: false}))
	    .pipe(gulp.dest('assets/'));
	});

};
