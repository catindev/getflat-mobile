var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var lib = require('bower-files')();

gulp.task('vendors-js', function(){
		return gulp.src(lib.ext('js').files)
				.pipe(concat('vendors.js'))
				.pipe(uglify({ mangle: false }))
				.pipe(gulp.dest('assets/'));
});

gulp.task('vendors-css', function(){
		return gulp.src(lib.ext('css').files)
				.pipe(concat('vendors.css'))
				.pipe(minifyCSS({ keepBreaks: false }))
				.pipe(gulp.dest('assets/'));
});

gulp.task('vendors', [ 'vendors-css', 'vendors-js' ]);
