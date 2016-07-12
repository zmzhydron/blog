'use strict';
import React from "react";
import ReactDOM from "react-dom";
export default class Todo extends React.Component{
    constructor(props){
        super();
        this.state = props;
        this.isClassActive = false;
        this.isContentActive = false;
    }
    componentWillMount(){
        // console.log("componentWillMount");
    }
    componentDidMount(){
        // console.log("componentDidMount");
    }
    componentWillUpdate(newprops,newstates){
        // console.log('componentWillUpdate',newprops,newstates);
    }
    componentWillReceiveProps(newprops){
        // console.log("componentWillReceiveProps",this.state,newprops);
        this.setState({data:newprops.data});
    }
    componentWillUnmount(){
        // console.log('componentWillUnmount');
    }
    delete(){
        this.props.functions.delete(this.index,this);
    }
    check(){
        this.props.functions.check(this.index);
    }
    edit(){
        var className = 'editTodo';
        var editContainer = this.refs.editTodoCtn,
            deleteBtn = this.refs.deleteBtn,
            checkBtn = this.refs.checkBtn,
            todoItem = this.refs.todoItem;
        if(!this.isClassActive){
            className = 'editTodo active';
            checkBtn.setAttribute('disabled',"disabled");
            deleteBtn.setAttribute('disabled',"disabled");
            this.isClassActive = true;
        }else{
            deleteBtn.removeAttribute('disabled');
            checkBtn.removeAttribute('disabled');
            this.isClassActive = false;
            this.props.functions.update(this.index,this.state.data);
        }
        this.forceUpdate();
        // editContainer.className = className;
    }
    onTitleChange(e){
        this.title = e.target.value;
        this.setState({data: Object.assign({},this.state.data,{title:e.target.value})})
    }
    onInfoChange(e){
        this.info = e.target.value;
        this.setState({data: Object.assign({},this.state.data,{info:e.target.value})})
    }
    expaded(e){
        console.log(this.isContentActive);
        if(this.isContentActive){
            this.isContentActive = false;
        }else{
            this.isContentActive = true;
        }
        this.forceUpdate();
    }
    render(){
        // var {data: {title,compiled,info},index} = this.props;
        var {data: {title,compiled,info,display},index} = this.state;
        this.index = index;
        this.compiled = compiled;
        var editTodoClass = this.isClassActive ?  "editTodo active" : "editTodo";
        var todoClassName = "todoItem " + (display === 'block' ? 'block' : display);
        var contentClass = "todoContent " + (this.isContentActive ? "active" : "");
        return (
            <div className={ todoClassName } ref="todoItem">
                <div className="todoTitleCtn">
                    <span className = "todoTitle" onClick= { this.expaded.bind(this) }>{title}</span>
                    <span className = "todoTitleDelete" onClick={this.delete.bind(this)}>X</span>
                     <input type="checkbox" onChange = {this.check.bind(this)} checked={compiled}/>
                </div>
                <div className={ contentClass } ref="todoContent">
                    <div className="todoInfo">{info}</div>
                    <div className = {editTodoClass} ref="editTodoCtn">
                        <p>title: <input value={title} onChange={this.onTitleChange.bind(this)} ref="title"/></p>
                        <p>info: <textarea value={info} onChange={this.onInfoChange.bind(this)} ref="info"></textarea></p>
                    </div>
                    <div className="todoControl">
                        <button id="deleteBtn" ref="deleteBtn" onClick={this.delete.bind(this)}>delete</button>
                        <button id="checkBtn" ref="checkBtn" onClick={this.check.bind(this)}>check</button>
                        <button id="editBtn" onClick={this.edit.bind(this)}>edit</button>
                    </div>
                </div>
            </div>
        )
    }
}
