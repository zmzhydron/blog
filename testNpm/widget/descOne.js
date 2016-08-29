'use strict'
import React from "react"

export default Wrapper => {
	return class DESC extends React.Component{
		constructor(props){
			super();
			console.log(props.name, `construcotr`)
		}
		componentWillMount(){
			console.log('componentWillMount~~~~ outer ONE')
		}
		clicker(e){
			console.log("hehe",e.target);
		}

		render(){
			return (
				<div>
					<h1>DECORATOR ONE</h1>
					
					<Wrapper {...this.props} clicker={this.clicker.bind(this)} />
				</div>
			)
		}
	}
}