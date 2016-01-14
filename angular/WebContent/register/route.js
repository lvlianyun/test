/**
 * Created by lvly on 2015/11/12.
 */
define(function(require, exports, module) {
	
    var app = require('register/app');
    
    require("register/controllers/registerCtrl");

    app.config(['$routeProvider', '$locationProvider',function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
      


    }]);
   
});