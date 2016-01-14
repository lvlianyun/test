
define(function(require, exports, module) {

    var $ = require('jquery'),
        angular = require('angular'),
        app = require('main/app');


    require('main/route');

    $(document).ready(function() {
        setTimeout(function() {
            angular.bootstrap(document, [app.name]);
        }, 0);
    });
});