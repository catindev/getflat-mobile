angular.module('getflat.home')

.service('HomePageModel', function($rootScope){
    var service = this;
    service.latestAds = null;

    service.onUpdated = function(callback){
      $rootScope.$on( 'rest.response:latestAds:success',
          function(event, response) {
              service.latestAds = response.data;
              return callback(response.data);
          });

      $rootScope.$on( 'rest.response:latestAds:error',
          function(event, response) {
            return console.error("Latest ads error",response.data);
          });
    }

    if(!service.latestAds){
      $rootScope.$emit( 'rest.request', {
          id: 'latestAds',
          uri: 'flats/'
      });
    }

});
