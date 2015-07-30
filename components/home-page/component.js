angular.module('getflat.home',[ 'ngRoute', 'gm.widgets.header', 'gm.widgets.photo-preview' ])

.config(function ($routeProvider) {
  $routeProvider.
      when('/', {
          templateUrl: 'components/home-page/template.html',
          controller: 'homePageController',
          controllerAs: 'home'
          // resolve: {
          //     latestAds: function (homePageRest) {
          //         return homePageRest.getLatest();
          //     }
          // }
      }).otherwise({ redirectTo: '/' });

});
