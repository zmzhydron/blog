'use strict'
import React from "react";
import HighOrder from './../highOrderComponent.js';
class Calender extends React.Component{
    constructor(props){
        super();
		console.log(props);
		this.date = new Date();
        this.year = this.getInitYear();
        console.log(this.year);
    }
    getInitYear(){
        var yearAry = [];
        var curYear = this.date.getFullYear();
        var index = 0;
        while(index <= 10){
            yearAry.push(curYear--);
            index++;
        }
        return yearAry;
    }
    componentWillMount(){
        console.log("calneder will mount!!");
    }
    componentWillReciveProps(newProp){
    }
    componentWillUnMount(){
    }
    componentDidMount(){
    }
    render(){
        return <h2> this is calender!!!! {this.props.type}</h2>;
    }
}
export default HighOrder(Calender);
