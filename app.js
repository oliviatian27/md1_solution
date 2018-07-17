(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch = "";
  $scope.message='';

  $scope.checker = function () {
   var lunch=$scope.lunch;
    if (!lunch){
      $scope.lunchstyle={'border-color':'red'};
      $scope.messagestyle={'color':'red'}
      $scope.message= 'please enter you lunch first';
    } else{
      lunch=lunch.split(',').filter(x=>x);
      $scope.lunchstyle={'border-color':'green'};
      $scope.messagestyle={'color':'green'}
      if (lunch.length>3){
        $scope.message= 'Too much!';
     }
        $scope.message='Enjoy!'
    }
  }
  
}

})();
