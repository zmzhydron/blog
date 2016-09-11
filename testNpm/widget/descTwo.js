'use strict'
import React from "react"
export default Wrapper => {
	return class DESC extends React.Component{
		constructor(props){
			super();
			console.log(props.name, `construcotr`)
		}
		componentWillMount(){
			console.log('componentWillMount~~~~ outer TWO')
		}

		render(){
			let { clicker: c } =this.props;
			return (
				<div>
					<h1>DECORATOR TWO</h1>
					<button onClick ={c}>DESC 22222222</button>
					<Wrapper {...this.props} />
				</div>
			)
		}
	}
}