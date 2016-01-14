(function() {
	
	var version = new Date().getTime();
    seajs.config({
        base: '.',
        alias: {
            'jquery'      : 'assets/js/jquery/1.11.0/jquery.min',           
            'angular'     : 'assets/js/angular/1.2.17g/angular',
            'ng-resource' : 'assets/js/angular/1.2.17g/angular-resource.min',
            'ng-route'    : 'assets/js/angular/1.2.17g/angular-route.min',
            'ng-cookies'  : 'assets/js/angular/1.2.17g/angular-cookies.min',
             'daren' : 'assets/js/daren/daren-all.min',

          
        },

        preload: [
            Function.prototype.bind ? '' : 'es5-safe',
            'jquery',           
            'angular',
            'ng-resource',
            'ng-route',
            'ng-cookies',
            'daren'
           
        ],
        // �������
        vars: {
            root: ''
        },
        paths: {
//            'daren': '/daren/js'
        	'common': '/daren'
        },

        // ��������ѡ�������ر�
        debug: true,
        map: [
            [ '.min.js', '.js?'+version ],
            [ '.js'    , '.js?'+version ]
        ]
    });

})(seajs);