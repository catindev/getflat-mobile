angular.module('gm.widgets.select', [])
    .directive('gwSelect', [function () {
        'use strict';
        return {
            scope: {
                label: '@',
                values: '=',
                selected: '='
            },
            replace: true,
            templateUrl: 'components/select/template.html',
            restrict: "E",
            link: function (scope) {
                scope.eid = Math.random();
                scope.selected = {
                    id: 0,
                    disabled: true,
                    label: scope.label
                };
            }
        };
    }]);
