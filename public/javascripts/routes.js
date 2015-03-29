/**
 * Created by man on 15-3-28.
 */
define(['angular','app'],function(angular,app){
    return app.config(['$routeProvider',function($routeProvider){
//        $routeProvider
        $routeProvider.when("/view1",{
                template:'<div>view111111</div>'
            })
        $routeProvider.when("/view2",{
                template:'<div>view222222</div>'
            })
        $routeProvider.otherwise({
                redirectTo:'/view1'
            });
    }]);
});