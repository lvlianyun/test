/**
 * Created by lvly on 2015/11/12.
 */
define(function(require, exports, module) {
    require("main/controllers/indexCtrl");
    var app = require('main/app');

    app.config(['$routeProvider', '$locationProvider',function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when('/Book/:bookId', {
                templateUrl: '/main/view/book.html',
                controller: 'BookController',
                resolve: {
                    // I will cause a 1 second delay
                    delay: function ($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }
            })
            .when('/Book/:bookId/ch/:chapterId', {
                templateUrl: '/main/view/chapter.html',
                controller: 'ChapterController'
            });


    }]);
    app.directive("sayHello",function(){

    });
});