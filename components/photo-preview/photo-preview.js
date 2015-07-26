angular.module('gm.widgets.photo-preview',[ ])

.directive('gmPhotoPreview',
    function () {
        return {
            scope: {
              src: '@',
              info: '=',
              noborder: '@'
            },
            templateUrl: 'components/photo-preview/template.html',
            restrict: "E",
            replace: true
        }
});
