/**
 * Created by man on 15-3-30.
 */
define([],function(){
    return {
        '/view1':{
            template:'<div>view111111</div>'
        },
        '/view2':{
            template:'<div>view222222</div>'
        },
        'default':{
            redirectTo:'/view1'
        }
    }
});