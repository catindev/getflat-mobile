angular.module('gm.widgets.file-input',[ 'angularFileUpload' ])

.directive('gmFileInput',
    function () {
        return {
            scope: {
              photo: '='
            },
            templateUrl: 'components/new-ad/file-input/template.html',
            restrict: "E",
            replace: true,
            controller: function($scope, FileUploader) {
                $scope.photos = $scope.photos || [];

                $scope.progress = false;

                $scope.uploader = new FileUploader({
                    autoUpload: true,
                    url: 'rest/images/',
                    alias: 'photo'
                });

                $scope.getTitle = function () {
                  if($scope.progress) return 'Фото загружается...';
                  if($scope.photo) return 'Загрузить другое фото';
                  return 'Загрузить фото';
                };

                $scope.uploader.onProgressAll = function(progress) {
                   $scope.progress = true;
                };

                $scope.uploader.onSuccessItem = function(fileItem, response, status, headers) {
                    $scope.progress = false;
                    //console.info('onSuccessItem', fileItem, response, status, headers);
                    $scope.photo = response.image;
                };
            }
        }
});
