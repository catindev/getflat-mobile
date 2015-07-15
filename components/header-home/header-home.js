angular.module('gm.widgets.header',[])

.directive('gmHeader',
    function () {
        return {
            scope: false,
            templateUrl: 'components/header-home/template.html',
            restrict: "E",
            replace: true
        }
});
