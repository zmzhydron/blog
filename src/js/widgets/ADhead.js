'use strict'
import React from "react";

export default class ADHEAD extends React.Component{
    constructor(props){
        super();
		console.log("ADHEAD");
		console.log(props);
    }
	componentWillMount(){
		this.styles = {
			color: "red",
			backgroundColor: "lime"
		}
	}
	componentDidMount(){
		var headref = this.refs.ADheadTitle;
	}
    render(){
        var {children: sonNode} =  this.props;
		var {MSG: overtime} = this.props;
        return (
            <div>
                <div>
					<h2 ref="ADheadTitle" style={this.styles}>HeadBody as Follows:</h2>
					{sonNode}
				</div>
            </div>
        )
    }
}
