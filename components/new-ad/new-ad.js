angular.module('getflat.new-ad',[])

.controller('newAdController',
  function(newAdRest, $rootScope, $location){

    var newAd = this;
    newAd.periods = [
      { id: 'H', label: 'По часам' },
      { id: 'D', label: 'Посуточная' },
      { id:  'M', label: 'Ежемесячная' }
    ];

    newAd.sizeTypes = [
      { id: 1, label: '1' },
      { id: 2, label: '2' },
      { id: 3, label: '3' },
      { id: 4, label: '4+' },
    ];

    newAd.required = [
      'address', 'author', 'size', 'type', 'cost', 'comment'
    ];

    newAd.form = { };

    newAd.sendForm = function() {
      if(!isInvalid())
        newAdRest.saveAd(newAd.form,function(status,resp) {
          if(status === 'success') $location.path('/f/' + resp._id);
        });
    };

    function isInvalid() {
      for(var f in newAd.required) {
        if(newAd.required[f] in newAd.form) { console.log(newAd.required[f], newAd.required[f] in newAd.form); }
        else {
          console.log(newAd.required[f], newAd.required[f] in newAd.form);
          return true;
        }
      }
      return false;
    };

  });
