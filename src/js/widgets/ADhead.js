'use strict'
import React from "react";

export default class ADHEAD extends React.Component{
    constructor(props){
        super();
    }
    render(){
        var {children: chill} =  this.props;
        return (
            <div>
                <h2>{chill}ad for rent!!!</h2>
            </div>
        )
    }
}