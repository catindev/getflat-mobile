angular.module('getflat.home').controller('HomePageController',
  function ($scope, HomePageModel) {
    var home = this;

    if(HomePageModel.latestAds) home.latest = HomePageModel.latestAds;

    HomePageModel.onUpdated(function(latestAds) {
       home.latest = latestAds;
    });

    $scope.$on('$destroy', function iVeBeenDismissed() {
      console.warn('home page destroying');
    });

  });
