angular.module('webapp', [
    'ngRoute',
    'tenphi.bem',
    'getflat.rest',
    'gm.widgets.back-header',
    'gm.widgets.textbox',
    'gm.widgets.select',
    'getflat.flat-page',
    'getflat.new-ad',
    'getflat.home'
])


.config(function ($routeProvider, $locationProvider) {
  $routeProvider.
      when('/', {
          templateUrl: 'components/home-page/template.html',
          controller: 'homePageController',
          controllerAs: 'home',
          resolve: {
              flatStream: function (homePageRest) {
                 return homePageRest.getFlat();
              }
          }
      }).
      when('/f/:id', {
          templateUrl: 'components/flat-page/template.html',
          controller: 'flatPageController',
          controllerAs: 'flat'
      }).
      when('/n', {
          templateUrl: 'components/new-ad/template.html',
          controller: 'newAdController',
          controllerAs: 'newAd'
      }).
      otherwise({ redirectTo: '/' });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

})

.controller('webAppController',
    function ($rootScope) {
        var app = this;
        $rootScope.debug = true;
    }
);
