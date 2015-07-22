angular.module('gm.widgets.image-preview',[ ])

.directive('gmImagePreview',
    function () {
        return {
            scope: {
              src: '@'
            },
            templateUrl: 'components/image-preview/template.html',
            restrict: "E",
            replace: true
        }
});
