angular.module('getflat.flat-page',[])

.controller('flatPageController',
  function(flatPageRest, $rootScope, $routeParams){

    var flat = this,
        flat_id = $routeParams.id,
        flat_label = 'flat#' + flat_id;

    flatPageRest.getFlat(flat_id,
      function(status, response) {
        console.log('status', status);
        console.log(response);
      });

  });
