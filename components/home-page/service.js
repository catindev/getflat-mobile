angular.module('getflat.home')

.service('homePageRest', function($rootScope, $resource){
    var service = this;
    service.latestAds = $resource("/rest/ads/?latest=5");
});
