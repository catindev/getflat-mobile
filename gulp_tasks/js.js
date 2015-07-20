var angularTemplates = require('gulp-angular-templatecache');
var inline_image_path = require('gulp-inline-image-path');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

module.exports = function (gulp) {

    gulp.task('components_html', function () {
        return gulp.src([ 'components/**/*.html' ])
            .pipe(inline_image_path({ path: "assets/images" }))
            .pipe(angularTemplates({
                module: 'webapp',
                root: 'components/',
                filename: 'ctemplates.js'
            }))
            .pipe(gulp.dest('assets/'));
    });

    gulp.task('js', [ 'components_html' ], function() {
        return gulp.src([ 'components/webapp/webapp.js', 'assets/ctemplates.js', 'components/**/*.js' ])
            .pipe(concat('build.js'))
            .pipe(uglify({mangle: false}))
            .pipe(gulp.dest('assets/'));
    });
};
