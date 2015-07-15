angular.module('getflat.flat-page',[])

.controller('flatPageController',
  function(flatPageRest, $rootScope, $routeParams){

    var flat = this,
        flat_id = $routeParams.id;

    flat.rtype = { H: "час", D: "день",  M: "месяц" };

    flat.showContacts = false;

    flatPageRest.getFlat(flat_id,
      function(status, response) {
        if(status === 'success') flat.info = response;
      });

  });
