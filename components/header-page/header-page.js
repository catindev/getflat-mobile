angular.module('gm.widgets.header-page',[])

.directive('gmHeaderPage',
    function () {
        return {
            scope: {
              title: '@',
              backURL: '@',
              icon: '@'
            },
            templateUrl: 'components/header-page/template.html',
            restrict: "E",
            replace: true
        }
});
