angular.module('getflat.home',['ngResource'])

.controller('homePageController',
  function(homePageRest){
    var home = this;
    //home.latest = homePageRest.latestAds.query();
    homePageRest.getFlat(function(status, resp) {
      home.latest = resp;
    });
  });
