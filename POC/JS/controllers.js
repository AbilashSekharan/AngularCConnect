var phonecatApp = angular.module("phonecatApp",["ngRoute"]);

phonecatApp.config(
    ['$routeProvider',
     function($routeProvider){
        $routeProvider
        .when("/phones",
              {
                  templateUrl: "/Partial/phone-list.html",
                  controller: "phoneListController"                          
              })
        .when("/phone/:phoneId",
              {
                  templateUrl: "/Partial/phone-detail.html",
                  controller: "phoneDetailController"            
              })
        .otherwise(
              {
                  redirectTo : "/phones"
              });
            }]);

phonecatApp.controller("phoneListController", function($scope, $http) {    
    $http.get('Data/PhoneData.json').success(function(data){
         $scope.phones = data;
    });
});

phonecatApp.controller("phoneDetailController", function($scope, $routeParams) {    
    $scope.phoneId = $routeParams.phoneId;
     $scope.name = "name will come from data base later";
     $scope.snippet = "snippet will come from data base later";
});