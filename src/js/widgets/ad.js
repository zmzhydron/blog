'use strict'
import React from "react";
import Head from "./ADhead.js";
import Body from "./ADbody.js";
export default class AD extends React.Component{
    componentDidMount(){
        console.log("componentDidMount : AD");
        
    }
    render(){
        return (
            <div>
                <h2> this is AD!!!!</h2>
                <Head><Body age={"27"}/></Head>
            </div>
        )
    }
}
