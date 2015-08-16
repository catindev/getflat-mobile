var gulp = require('gulp');
var dformat = require('dateformat');
var pinfo = require('../package.json');
var fs = require('fs');

gulp.task('index', [ 'vendors', 'js', 'less' ], function(){
    var d = new Date();
    var prefix = "?v=" + d.getTime();
    var css = [ 'vendors', 'build' ];
    var js  = [ 'vendors', 'build' ];

    return fs.readFile('./components/webapp/template.html', 'utf8', function (err,data) {
        if (err) return console.log(err);
        var cssTpl = '\n', jsTpl = '\n';
        for(var jsfile in css) cssTpl+= '<link rel="stylesheet" type="text/css" href="/assets/'+ css[jsfile] +'.css' + prefix + '">' + '\n';
        for(var cssfile in js) jsTpl+= '<script src="/assets/'+ js[cssfile] +'.js' + prefix + '"></script>' + '\n';

        var result = data.replace("<build/>",  dformat(d, "dd.mm HH:MM"))
            .replace("<app/>", pinfo.name)
            .replace("<version/>", pinfo.version)
            .replace("<css/>", cssTpl)
            .replace("<javascript/>", jsTpl);

        fs.writeFile('./index.html', result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
});

gulp.task('default', ['watch']);
