'use strict'
import React from "react";
import Head from "./ADhead.js";
import Body from "./ADbody.js";
export default class AD extends React.Component{
    constructor(props){
        super();
    }
    componentWillMount(){
        console.log("AD componentDidMount");
        console.log(this.props);
    }
    componentWillUnmount(){
        console.log('AD  componentWillUnmount')
    }
    componentWillReciveProps(newProp){
        console.log('AD componentWillReciveProps!',newProp);
    }
    componentWillUpdate (){
        console.log('AD componentWillUpdate ');
    }
    componentDidUpdate (){
        console.log('AD componentDidUpdate ');
    }
    render(){
        var { params } = this.props;
        var { fuck: type } = params;
        var { location: {query}} = this.props; //得到url query
        console.log("ad reder!!");
        return (
            <div>
                <h2> this is AD!!!!</h2>
                <Head><Body query={query} type={type} age={"27"}/></Head>
            </div>
        )
    }
}
