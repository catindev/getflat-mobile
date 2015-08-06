angular.module('getflat.home').controller('HomePageController',
  function ($scope, HomePageModel) {
    var home = this;

    home.tab = 'ads';
    home.setTab = function(tab) { home.tab = tab; };

    if(HomePageModel.latestAds) home.latest = HomePageModel.latestAds;

    HomePageModel.onUpdated(function(latestAds) {
       home.latest = latestAds;
    });

    $scope.$on('$destroy', function iVeBeenDismissed() {
      console.warn('home page destroying');
    });

  });
