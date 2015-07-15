var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var lib = require('bower-files')();

module.exports = function (gulp) {

	gulp.task('vendors-js', function(){
	    return gulp.src(lib.ext('js').files)
	        .pipe(concat('vendors.js'))
	        //.pipe(uglify({mangle: false}))
	        .pipe(gulp.dest('assets/'));
	});

	gulp.task('vendors-css', function(){
	    var v = lib.ext('css').files
	    v.push( __dirname.replace('/gulp_tasks','') + '/assets/fonts.css');
			return gulp.src(v)
	        .pipe(concat('vendors.css'))
	        //.pipe(minifyCSS({keepBreaks: false}))
	        .pipe(gulp.dest('assets/'));
	});

	gulp.task('vendors', [ 'vendors-css', 'vendors-js' ]);

};
