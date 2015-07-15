angular.module('gm.widgets.textbox', [])
    .directive('gwTextbox', [function () {
        return {
            scope: {
                label: '@',
                value: '=',
                state: '@',
                type: '@',
                multi: '@',
                placeholder: '@'
            },
            replace: true,
            templateUrl: 'components/textbox/template.html',
            restrict: "E",
            controller: function($scope, $element, $attrs) {
              $scope.type = $attrs.type || "text";
            },
            link: function (scope, elem, attrs) {
                scope.eid = Math.random();
            }
        }
    }]);
