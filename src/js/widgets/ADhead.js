'use strict'
import React from "react";

export default class ADHEAD extends React.Component{
    render(){
        var {children: chill} =  this.props;
        console.log("ADHEAD~~~");
        var aa = new this.props.children.type();
        console.log(aa.classname);
        aa.myfeture();
        aa.render(<h1>rerender</h1>,document.getElementById('fuck'))
        return (
            <div>

                <h2>{chill} ad for rent!!!</h2>
            </div>
        )
    }
}