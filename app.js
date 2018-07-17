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
      var count=lunch.length;
      $scope.lunchstyle={'border-color':'green'};
      $scope.messagestyle={'color':'green'}
      if (count>3){
        $scope.message= 'Too much!';
     } else{
        $scope.message='Enjoy!'
     }
    }
  }
  
}

})();
