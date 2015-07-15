angular.module('getflat.home',[])

.controller('homePageController',
  function(homePageRest, $rootScope){

    var home = this;

    $rootScope.$on( 'rest.response:home#latest:success',
        function(event, response) {
          home.latestе = response.data;
        });

  });
