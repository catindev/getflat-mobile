angular.module('gm.widgets.header',[])

.directive('gmHeader',
    function () {
        return {
            scope: false,
            templateUrl: 'components/home-page/header/template.html',
            restrict: "E",
            replace: true
        }
});
