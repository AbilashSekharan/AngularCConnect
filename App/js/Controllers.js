var connectApp = angular.module("connectApp",["ngRoute"]);

connectApp.config(
    ['$routeProvider',
     function($routeProvider){
        $routeProvider
        .when("/trips",
              {
                  templateUrl: "/partial/trip-list.html",
                  controller: "tripListController"                          
              })
        .when("/trip/:tripId",
              {
                  templateUrl: "/Partial/trip-detail.html",
                  controller: "tripDetailController"            
              })
        .otherwise(
              {
                  redirectTo : "/trips"
              })
            }]);

connectApp.controller("tripListController", function($scope, $http) {    
    $http.get('data/trips.json').success(function(data){
         $scope.trips = data;
    });
});

connectApp.controller("tripDetailController", function($scope, $routeParams) {    
     $scope.tripId = $routeParams.tripId;
     $scope.from = "FROM will come from data base later";
     $scope.to = "TO will come from data base later";
     $scope.time = "TIME will come from the data base later";    
});