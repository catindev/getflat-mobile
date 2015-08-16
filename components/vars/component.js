angular.module('getflat.vars',[])

.constant('sizeTypes', [
  { id: 1, label: '1' },
  { id: 2, label: '2' },
  { id: 3, label: '3' },
  { id: 4, label: '4+' }
])


.constant('periods', [
  { id: 'H', label: 'По часам' },
  { id: 'D', label: 'Посуточная' },
  { id:  'M', label: 'Ежемесячная' }
]);
