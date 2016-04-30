'use strict'
import React from "react";

export default class ADHEAD extends React.Component{
    constructor(){
        super();
        this.classname = 'adBODY';
    }
    componentWillMount(){
        console.log(` ad body will mount!! `);
    }
    myfeture(){
        console.log('this is my feture from adBODY')
    }

    render(){
        return (
            <div>
                <h2>this is ADBODY</h2>
            </div>
        )
    }
}