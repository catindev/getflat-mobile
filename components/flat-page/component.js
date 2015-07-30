angular.module('getflat.flat-page', [ 'ngRoute', 'gm.widgets.back-header', 'gm.widgets.photo-preview' ])

.config(function ($routeProvider) {
  $routeProvider.
      when('/f/:id', {
          templateUrl: 'components/flat-page/template.html',
          controller: 'flatPageController',
          controllerAs: 'flat'
      });
});
