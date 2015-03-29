/**
 * Created by man on 15-3-28.
 */
define(['angular', 'domReady', 'app'], function(angular, domReady) {

    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['app']);
    });
});