angular.module('webapp', [
    'ngRoute',
    'tenphi.bem'
])


.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'components/home-page/template.html',
            controller: 'homePageController'
        }).
        otherwise({ redirectTo: '/' });
})

.controller('webAppController',
    function ($rootScope) {

        var app = this;

    }
);

angular.module("webapp").run(["$templateCache", function($templateCache) {$templateCache.put("components/home-page/template.html","<div>\n  <div block=\"mb-hero\">\n    <div elem=\"logo\">getflat</div>\n    <div elem=\"about\">Поиск и аренда квартир</div>\n    <a block=\"mb-new-ad-button\">Сдать квартиру...</a>\n  </div>\n\n  <div block=\"mb-ads-list-home\">\n      <div elem=\"title\">Объявления</div>\n      <div elem=\"list\">\n\n        <a href=\"\" block=\"mb-flat-item-link\" mod=\"{ &apos;type&apos;: &apos;viewed&apos; }\">\n          <div elem=\"address\">Ерубаева, 33/2</div>\n          <div elem=\"info\">3-комнатная за <span elem=\"cost\">55 000</span></div>\n        </a>\n\n        <a href=\"\" block=\"mb-flat-item-link\">\n          <div elem=\"address\">Нуркена Абдирова, 22</div>\n          <div elem=\"info\">1-комнатная за <span elem=\"cost\">70 000</span></div>\n        </a>\n\n      </div>\n  </div>\n</div>\n");
$templateCache.put("components/index-template/template.html","<!doctype html>\n<html lang=\"ru\" ng-app=\"webapp\">\n<head>\n<meta name=\"app\" content=\"&lt;app/&gt;\">\n<meta name=\"version\" content=\"&lt;version/&gt;\">\n<meta name=\"build\" content=\"&lt;build/&gt;\">\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n<meta charset=\"utf-8\">\n<title>мобильный getflat</title>\n<style type=\"text/css\">\nhtml, body {\n    font: 13px \'font-300\', Verdana, Arial, sans-serif;\n    background: #F0F3F9;\n    height:100%;\n}\n</style>\n<css>\n</css></head>\n<body ng-controller=\"webAppController as webapp\">\n\n    <div ng-view=\"\"></div>\n\n</body>\n<javascript>\n</javascript></html>\n");}]);
angular.module('webapp')
.controller('homePageController', 
function(){


});
