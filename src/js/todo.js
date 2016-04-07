'use strict';
import React from "react";

export default class todo extends React.Component{
    constructor(){
        super();
        console.log("@@@@@@@@")
    }
    componentWillMount(){
        console.log('~~~~~~~~~');
    }
    render(){
        // var { name } = this.props.data;
        // var { index } = this.props.index;
        return (
            <p>{ this.props.data }</p>
        )
    }
}
