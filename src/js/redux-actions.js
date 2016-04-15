'use strict';

export default {
    DELETETODO: (index) =>{
        return {
            type: "DELETETODO",
            index
        }
    },
    CHECKTODO: (index) =>{
        return {
            type: "CHECKTODO",
            index
        }
    },
    UPDATETODO: (data) =>{
        return {
            type: "UPDATETODO",
            data
        }
    }
}
