'use strict'
import React from "react";
export default class Calender extends React.Component{
    componentWillMount(){
        console.log("calender");
    }
    componentWillReciveProps(newProp){

    }
    componentWillUnMount(){
        console.log("$$$$$$$$")
    }
    componentDidMount(){

    }
    render(){
        return (
            <div>
                <h2> this is calender!!!!</h2>
            </div>
        )
    }
}
