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
                  templateUrl: "/partial/trip-detail.html",
                  controller: "tripDetailController"            
              })
        .otherwise(
              {
                  redirectTo : "/trips"
              })
            }]);