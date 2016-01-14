define(function(require, exports, module) {
	
	var app=require('register/app');
	
    app.controller('RegisterController', ['$scope','ValidateService',function($scope,ValidateService) {
   
    	
        var validater=new ValidateService({
            'user.mobile':validateMobile,
            'user.username':validateUsername
        },$scope);

        
        $scope.validater=validater;
        
        $scope.$on('user.usernameSuccess',function(event,result){
        	
        	console.info(validater.isValid());
        	
        	
        });
        
        function  validateMobile(mobile){
        	
            if(!mobile) return '手机号码不能为空';
             
            var reg=/^1[3456789]\d{9}$/;
             
            if(!reg.test(mobile)){
                
            	return '请输入正确的手机号码' ;
            }
            
            return '';

        }

        function  validateUsername(username){
           
        	if(!username) return '用户名不能为空';
        	
        	if(username.length<5){
        		 return '请输入5-10位的用户名';
        	}
        	
        	return '';
        }
    
    }]);
});