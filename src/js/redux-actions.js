'use strict';
function createActions(actionType,...arg){
    var obj = {type: actionType};
    return function(){
        arg.map((item,index) =>{
            obj[item] = arguments[index];
        });
        console.log(obj);
        return obj;
    }
}

var DELETETODO = createActions('DELETETODO','index');
var CHECKTODO = createActions('CHECKTODO','index');
var UPDATETODO = createActions('UPDATETODO','index','data');
var FILTERTODO = createActions('FILTERTODO',"val");
var ADDTODO = createActions("ADDTODO",'data');
export { DELETETODO, CHECKTODO, UPDATETODO, FILTERTODO, ADDTODO};
