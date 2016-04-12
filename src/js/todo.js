'use strict';
import React from "react";

export default class todo extends React.Component{
    constructor(){
        super();
    }
    componentWillMount(){
        
    }
    delete(){
        this.props.functions.delete(this.index);
    }
    check(){
        this.props.functions.check(this.index,!this.compiled);
    }
    funny(){
        
    }
    render(){
        var {data: {title,compiled,info},index} = this.props;
        this.index = index;
        this.compiled = compiled;
        return (
            <div>  
                <div>
                    <p>title: {title} <input type="checkbox" onChange = {this.check.bind(this)} checked={compiled}/></p>
                    <p>info: {info}</p>
                </div>
                <button onClick={this.delete.bind(this)}>delete</button>
                <button onClick={this.check.bind(this)}>check</button>
            </div>
        )
    }
}
