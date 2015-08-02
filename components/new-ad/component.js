angular.module('getflat.new-ad', [
  'ngRoute',
  'ngSanitize',
  'gm.widgets.image-input',
  'gm.widgets.textbox',
  'gm.widgets.select',
  'gm.widgets.photo-preview'
])

.config(function ($routeProvider) {
  $routeProvider.
      when('/new', {
          templateUrl: 'components/new-ad/template.html',
          controller: 'newAdController',
          controllerAs: 'newAd'
      }).otherwise({ redirectTo: '/new' });
})

.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);
