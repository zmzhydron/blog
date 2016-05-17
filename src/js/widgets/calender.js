'use strict'
import React from "react";
import HighOrder from './highOrderComponent.js';
class Calender extends React.Component{
    constructor(props){
        super();
		console.log(props);
		console.log('calender constructor!!!');
    }
    componentWillMount(){
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
