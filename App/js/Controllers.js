//==> TRIP LIST CONTROLLER
//=======================================================

connectApp.controller("tripListController", function($scope, $http, tripDetailService) {   
    var loadDataPromise = tripDetailService.GetAllTrips();
    loadDataPromise.then(
        function(data){
           $scope.trips = data; 
        }
    );
    $scope.searchTrip = function(element){
        //alert(" Trip date " + $scope.tripDate);
        //alert(" Trip date " + $scope.toPlace);
        loadDataPromise = tripDetailService.GetAllTrips();
        loadDataPromise.then(
            function(data){
                 var result = jQuery.grep(data
                                    , function(e){ 
                                        //alert($scope.tripDate);alert($scope.toPlace);
                                        var result = false;
                                        if(($scope.tripDate != undefined || $scope.tripDate == "")  
                                           && ($scope.toPlace !=undefined || $scope.toPlace == "")){
                                            result = (e.date ==  $scope.tripDate && e.to == $scope.toPlace); 
                                        }
                                        else{                                                                                
                                            result = (e.date ==  $scope.tripDate || e.to == $scope.toPlace); 
                                        }
                                        return result;
                                    });
                
                $scope.trips = result; 
            }
        );
    }
});

//==> TRIP DETAILS CONTROLLER
//=======================================================

connectApp.controller("tripDetailController", function($scope, $routeParams,tripDetailService) {    
     var loadDataPromise = tripDetailService.GetAllTrips();
     loadDataPromise.then(
        function(data){                        
            var result = jQuery.grep(data
                                    , function(e){                                      
                                        return e.id == $routeParams.tripId; 
                                    });
            $scope.tripId = result[0].id;
            $scope.from = result[0].from;
            $scope.to = result[0].to;
            $scope.vehicle = result[0].vehicle;
            $scope.departureTime = result[0].departureTime;
        }
    );
});