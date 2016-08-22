'use strict'
import React from "react";

export default class ADBODY extends React.Component{
    constructor(props){
        super();
        this.classname = 'adBODY';
		console.log('ADBODY pROPS');
		console.log(props);
    }
    componentWillMount(){
        this.setState({
            type: this.props.type,
            query : this.props.query
        })
    }
    componentWillReceiveProps(newProps){
        this.setState({
            type: newProps.type,
            query : newProps.query
        })
    }
    render(){
        let { type } = this.state;
        let { query } = this.state;
        var {me,age} = query;
        return (
            <div>
                <h2>this is ADBODY and i like this way : {type}</h2>
                <h3>and my name is {me} and age is : {age}</h3>
            </div>
        )
    }
}
