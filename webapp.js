angular.module('webapp', [
    'ngRoute',
    'tenphi.bem',
    'getflat.rest',
    'getflat.home',
    'gm.widgets.header',
    'gm.widgets.back-header',
    'getflat.flat-page'
])


.config(function ($routeProvider, $locationProvider) {
  $routeProvider.
      when('/', {
          templateUrl: 'components/home-page/template.html',
          controller: 'homePageController',
          controllerAs: 'home'
      }).
      when('/f/:id', {
          templateUrl: 'components/flat-page/template.html',
          controller: 'flatPageController',
          controllerAs: 'flat'
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
