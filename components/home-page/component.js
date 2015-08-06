angular.module('getflat.home',[ 'ngRoute', 'ngAnimate', 'gm.widgets.header', 'gm.widgets.photo-preview', 'getflat.rest' ])

.config(function ($routeProvider) {
  $routeProvider.
      when('/', {
          templateUrl: 'components/home-page/template.html',
          controller: 'HomePageController',
          controllerAs: 'home'
          // resolve: {
          //     latestAds: function (homePageRest) {
          //         return homePageRest.getLatest();
          //     }
          // }
      }).otherwise({ redirectTo: '/' });

});
