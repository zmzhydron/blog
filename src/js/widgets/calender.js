'use strict'
import React from "react";
import testMix from './highOrderComponent.js';
class Calender extends React.Component{
    constructor(){
        super();
    }
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
        console.log("!!!!!!!!!");
        return <h2> this is calender!!!! {this.props.type}</h2>;
    }
}
export default testMix(Calender);