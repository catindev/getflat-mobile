angular.module('gm.widgets.back-header',[])

.directive('gmBackHeader',
    function () {
        return {
            scope: {
              title: '@',
              url: '@',
              icon: '@'
            },
            templateUrl: 'components/back-header/template.html',
            restrict: "E",
            replace: true
        }
});
