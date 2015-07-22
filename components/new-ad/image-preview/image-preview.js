angular.module('gm.widgets.image-preview',[ ])

.directive('gmImagePreview',
    function () {
        return {
            scope: {
              src: '@'
            },
            templateUrl: 'components/new-ad/image-preview/template.html',
            restrict: "E",
            replace: true
        }
});
