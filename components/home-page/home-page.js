angular.module('getflat.home',['gm.widgets.header'])

.controller('homePageController',
  function(homePageRest){
    var home = this;
    //home.latest = homePageRest.latestAds.query();
    homePageRest.onFlats(function(status, resp) {
      home.latest = resp;
    });
  });
