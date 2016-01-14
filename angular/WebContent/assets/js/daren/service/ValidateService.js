/**
 * Created by lvly on 2016/1/4.
 */
define(function (require, exports, module) {

    require("assets/js/daren/daren").factory('ValidateService', function () {

        return ValidateService;

    });

    function ValidateService(validObj, scope) {

        this._scope = scope;
        this._fields = [];
        this._fieldMsg = {};
        this._validFunction = {};
        this.init = false;
        initWatch.call(this, validObj, scope);
    }

    function initWatch(validObj, scope) {

        var that = this,
            _fileds = this._fields,
            _validFunction = this._validFunction;

        angular.forEach(validObj, watchStrage);

        this.init = true;

        function watchStrage(validFunction, filed) {

            _fileds.push(filed);

            _validFunction[filed] = validFunction;

            scope.$watch(filed, watchWrap(filed));

        }

        function watchWrap(filed) {

            return function (newValue, oldValue, scope) {
                that.valid(filed, newValue);
            };
        }
    };
    function createMsg(isValid, msg) {

        return {
            valid: isValid,
            msg: msg
        };
    }

    ValidateService.prototype.valid = function (filed, value) {

        if (!this.init) return;

        var validMsg = this._validFunction[filed](value);

        this._fieldMsg[filed] = createMsg(!validMsg, validMsg);

        this._scope.$emit(filed + 'Success', !!validMsg);

    };

    ValidateService.prototype.isValid = function() {
    	
    	if(!this.init) return false;
    	
    	var flag=true;
    	
    	var fieldMsg=this._fieldMsg;
    	
        angular.forEach(this._fields,function(value,index){
            
        	if(!fieldMsg[value]) this.valid(this._scope.$eval(value), value);
        	
        	if(!fieldMsg[value].valid) flag=false;
        	
        	
        },this);
        
        return flag;
    };


});