angular.module('gm.widgets.image-input', [ 'angularFileUpload' ])

.directive('gmImageInput',
    function () {
        return {
            scope: {
              photo: '='
            },
            templateUrl: 'components/new-ad/image-input/template.html',
            restrict: "E",
            replace: true,
            controller: function($scope, FileUploader) {

                $scope.progress = false;

                $scope.getTitle = function () {
                  if($scope.progress) return 'Фото загружается...';
                  if($scope.photo) return 'Загрузить другое фото';
                  return 'Загрузить фото';
                };

                $scope.uploader = new FileUploader({
                    autoUpload: true,
                    url: 'rest/images/',
                    alias: 'photo',
                    filters: []
                });

                $scope.uploader.filters.push({
                      name: 'imageFilter',
                      fn: function(item) {
                          var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                          return '|jpg|png|jpeg|bmp|'.indexOf(type) !== -1;
                      }
                  });

                $scope.uploader.onProgressAll = function(progress) {
                   $scope.progress = true;
                };

                $scope.uploader.onSuccessItem = function(fileItem, response, status, headers) {
                    $scope.progress = false;
                    $scope.photo = response;
                };
            }
        }
});
