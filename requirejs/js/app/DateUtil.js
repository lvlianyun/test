/**
 * Created by lvly on 2016/1/27.
 */
define(['app/StringUtil'],function(StringUtil){

     return {
         toString:function(){
              console.info(StringUtil.toString(33));
         },
         toDate:function(){
             console.info('toDate');
         }

     }
})