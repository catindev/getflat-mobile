angular.module('gm.widgets.header',[])

.directive('gmHeader',
    function () {
        return {
            scope: false,
            templateUrl: 'components/header/template.html',
            restrict: "E",
            replace: true
        }
});
