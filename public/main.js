/**
 * Created by man on 15-3-28.
 */
requirejs.config({
    baseUrl:"./javascripts/",
    paths:{
        angular:'libs/angular',
        angularRoute:'libs/angular-route',
        text:'libs/text',
        jquery:'libs/jquery',
        routes:'routes',
        app:'../app',
        boot:'boot',
        domReady:'libs/requirejs-domready'
    },
    shim:{
        angular:{exports:'angular'},
        angularRoute:['angular'],
        jquery:{exports:'$'}
    }
});

require(['app','boot','routes','jquery'],function(app,boot,routes,$){
    console.log($('title').html());
    console.log("it's ok!");
});

//require(['angular','angularRoute'],function(angular){
//    angular.module("app",[])
//        .config(['$routeProvider',function($routeProvider){
//            $routeProvider.when("/view1",{
//                template:'<div>view111111</div>'
//            })
//            $routeProvider.when("/view2",{
//                template:'<div>view222222</div>'
//            })
//            $routeProvider.otherwise({
//                redirectTo:'/view1'
//            });
//        }]);
//})