'use strict';
import React from "react";
export default class addTodo extends React.Component{
    constructor(prop){
        super();
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    addFun(){
        this.props.fun({
            title: "学习react-router",
            compiled: false,
            info: "学习react-router,到达基本单页应用的水平",
            display:"block"
        });
    }
    render(){
        var { fun: addFuns } = this.props;
        console.log(addFuns);
        return (
            <div>
                <h2>{name}</h2>
                <button onClick={this.addFun.bind(this)}>AddYourTodo!</button>
            </div>
        )
    }
}
