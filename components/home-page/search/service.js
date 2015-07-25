angular.module('getflat.new-ad')

.service('newAdRest', function($rootScope){
    var service = this;

    this.onFlatSave = function(callback) {
      $rootScope.$on( 'rest.response:flat#save:success',
          function(event, response) {
            return callback("success",response.data);
          });

      $rootScope.$on( 'rest.response:flat#save:error',
          function(event, response) {
            return callback("error",response.data);
          });
    };

    this.saveAd = function(data, callback) {
      $rootScope.$emit('rest.request', {
          id: 'flat#save',
          method: 'POST',
          uri: 'flats/',
          params: data
      });

      service.onFlatSave(callback);
    };

});
