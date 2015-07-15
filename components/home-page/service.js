angular.module('getflat.home')

.service('homePageRest', function($rootScope, $resource){
    var service = this;
    service.latestAds = $resource("/rest/flats/?latest=5");
});
