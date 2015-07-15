angular.module('getflat.flat-page')

.service('flatPageRest', function($rootScope){
    var service = this;

    this.onFlat = function(callback) {
      $rootScope.$on( 'rest.response:flat:success',
          function(event, response) {
            return callback("success",response.data);
          });

      $rootScope.$on( 'rest.response:flat:error',
          function(event, response) {
            return callback("error",response.data);
          });
    };

    this.getFlat = function(id, callback) {
      $rootScope.$emit('rest.request', {
          id: 'flat',
          uri: 'flats/' + id
      });

      service.onFlat(callback);
    };

});
