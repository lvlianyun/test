
define(function(require, exports, module) {

    var $ = require('jquery'),
        angular = require('angular'),
        app = require('register/app');


    require('register/route');

    $(document).ready(function() {
        setTimeout(function() {
            angular.bootstrap(document, ['indexApp']);
        }, 0);
    });
});