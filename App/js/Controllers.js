//==> MODULE
//=======================================================

var connectApp = angular.module("connectApp",["ngRoute"]);


//==> ROUTE PROVIDER
//=======================================================

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


//==> SERVICE COMPONENTS
//=======================================================

connectApp.factory("tripDetailService", function($http, $q){
    var tripDetailService = { };
    tripDetailService.GetAllTrips = function(){      
        var deffered = $q.defer();        
        var triplist = [];
        $http.get('data/trips.json')
             .success(function(data){
                deffered.resolve(data);
              })
              .error(function (data, status, headers, config) {
                    console.log("GOT AN ERROR");
                    deffered.reject("GOT AN ERROR");
            });
        return deffered.promise;;
    };
    return tripDetailService;
});

//==> CONTROLLERS
//=======================================================

connectApp.controller("tripListController", function($scope, $http, tripDetailService) {   
    var loadDataPromise = tripDetailService.GetAllTrips();
    loadDataPromise.then(
        function(data){
           $scope.trips = data; 
        }
    );
});

connectApp.controller("tripDetailController", function($scope, $routeParams) {    
     $scope.tripId = $routeParams.tripId;
     $scope.from = "FROM will come from data base later";
     $scope.to = "TO will come from data base later";
     $scope.time = "TIME will come from the data base later";    
});