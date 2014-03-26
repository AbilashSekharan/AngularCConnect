//==> TRIP DETAIL SERVICE
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
