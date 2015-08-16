var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var cssBase64 = require('gulp-css-base64');
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    cleancss = new LessPluginCleanCSS({ advanced: true }),
    autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });

gulp.task('less', function() {
    return  gulp.src([ 'components/**/*.less' ])
		.pipe(cssBase64({ maxWeightResource: 327680000 }))
    .pipe(concat('build.less'))
		.pipe(less({
			plugins: [ autoprefix, cleancss ],
			paths: [ __dirname.replace('gulp_tasks','')+'components' ]
		}))
    .pipe(gulp.dest('assets/'));
});
