angular.module('webapp', [ 
    'ngRoute', 
    'tenphi.bem'
])


.config(function ($routeProvider) {
    $routeProvider.
/*        when('/', {
            templateUrl: 'components/first-page/template.html',
            controller: 'firstPageController'
        }).   */             
        otherwise({ redirectTo: '/' });
})

.controller('webAppController', 
    function ($rootScope) {
	
        var app = this;

    }
);
angular.module("webapp").run(["$templateCache", function($templateCache) {$templateCache.put("components/index-template/template.html","<!doctype html>\n<html lang=\"ru\" ng-app=\"webapp\">\n<head>\n<meta name=\"app\" content=\"&lt;app/&gt;\">\n<meta name=\"version\" content=\"&lt;version/&gt;\">\n<meta name=\"build\" content=\"&lt;build/&gt;\">\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n<meta charset=\"utf-8\">\n<title>Webapp</title>\n<style type=\"text/css\">\nhtml, body {\n    font: 13px \'font-300\', Verdana, Arial, sans-serif;\n    background: #fff;\n    height:100%;\n}\n</style>\n<css>\n</css></head>\n<body ng-controller=\"webAppController as webapp\">\n\n    <div style=\"padding: 2rem 3rem;\">\n      <h1>title</h1>\n      <p>some text here</p>\n    </div>\n\n</body>\n<javascript>\n</javascript></html>\n");}]);