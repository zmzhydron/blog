import React from "react";
export default function(Component){
	return class AA extends React.Component{
			componentWillMount(){
				this.setState({
					type: "in the ass"
				})
			    console.log("highOrderComponent  componentWillMount");
			}
			componentWillUnMount(){
			    console.log("highOrderComponent  componentWillUnMount")
			}
			componentDidMount(){
				console.log("highOrderComponent  componentDidMount")
			}
			render(){
				return (
					<Component {...this.props} {...this.state} />
				)
			}
	}
}
