/**
 * Created by man on 15-3-28.
 */
define(['angular','app','routeConfig'],function(angular,app,routeConfig){
    return app.config(['$routeProvider',function($routeProvider){
//        $routeProvider
        for(var bash in routeConfig){
            if(bash == 'default'){
                $routeProvider.otherwise(routeConfig[bash]);
            }else{
                $routeProvider.when(bash,routeConfig[bash]);
            }
        }
    }]);
});