angular.module('gm.widgets.back-header',[])

.directive('gmBackHeader',
    function () {
        return {
            scope: {
              title: '@',
              backURL: '@',
              icon: '@'
            },
            templateUrl: 'components/back-header/template.html',
            restrict: "E",
            replace: true
        }
});
