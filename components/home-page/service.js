angular.module('getflat.home')

.service('homePageRest', function($rootScope){
    var service = this;
    service.latestAds = null;

    service.getLatest = function() {
      if(service.latestAds) return service.latestAds;
      $rootScope.$emit( 'rest.request', {
          id: 'flat#get',
          uri: 'flats/'
      });
    };

    $rootScope.$on( 'rest.response:flat#get:success',
        function(event, response) {
          service.latestAds = response.data;
        });

    $rootScope.$on( 'rest.response:flat#get:error',
        function(event, response) {
          return console.error("Latest ads error",response.data);
        });

});
