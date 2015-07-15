angular.module('getflat.home')

.service('homePageRest', function($rootScope){
    var service = this;

    this.getLatest = function() {
      return $rootScope.$emit('rest.request', {
          id: 'home#latest',
          uri: 'ads/?latest=5'
      });
    };

    service.getLatest();
});
