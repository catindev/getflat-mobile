angular.module('getflat.home').controller('homePageController',
  function (homePageRest, $rootScope, $scope) {
    var home = this;
    home.latest = homePageRest.getLatest();

    // clear & reset home page activities
    $scope.$on('$destroy', function iVeBeenDismissed() {
      console.warn('home page destroying');
    });

  })
