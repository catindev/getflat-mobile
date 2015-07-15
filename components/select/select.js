angular.module('gm.widgets.select', [])
    .directive('gwSelect', [function () {
        return {
            scope: {
                label: '@',
                values: '=',
                selected: '='
            },
            replace: true,
            templateUrl: 'components/select/template.html',
            restrict: "E",
            // controller: function ($scope, attrs) {
            //     $scope.selected = { };
            // },
            link: function (scope, elem, attrs) {
                scope.eid = Math.random();
                scope.selected = {
                  id:0, disabled: true, label: scope.label
                };
            }
        }
    }]);
