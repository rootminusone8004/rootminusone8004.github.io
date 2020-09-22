(function(){
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.result = "";
        $scope.counter = function(){
            if($scope.name){
                var itm = $scope.name.split(",");
                var cnt = itm.length;
                if(cnt <= 3){
                    $scope.result = "Enjoy!";}
                else{
                    $scope.result = "Too much!";}}
            else{
                    $scope.result = "Please enter data first";}};}
})();