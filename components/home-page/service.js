angular.module('getflat.home')

.service('homePageRest', function($rootScope, $resource){
    var service = this;
    service.latestAds = $resource("/rest/flats/?latest=5");

    this.onFlat = function(callback) {
      $rootScope.$on( 'rest.response:flat#get:success',
          function(event, response) {
            return callback("success",response.data);
          });

      $rootScope.$on( 'rest.response:flat#get:error',
          function(event, response) {
            return callback("error",response.data);
          });
    };

    this.getFlat = function(callback) {
      $rootScope.$emit('rest.request', {
          id: 'flat#get',
          uri: 'flats/'
      });

      service.onFlat(callback);
    };
});
