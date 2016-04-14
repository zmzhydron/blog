'use strict';
import React from "react";

export default class todo extends React.Component{
    constructor(){
        super();
        // this.state = {
        //     editActive: false
        // }
        this.isClassActive = false;
    }
    componentWillMount(){
        
    }
    delete(){
        this.props.functions.delete(this.index);
    }
    check(){
        this.props.functions.check(this.index);
    }
    edit(){
        var className = 'editTodo';
        var editContainer = this.refs.editTodoCtn,
            deleteBtn = this.refs.deleteBtn,
            checkBtn = this.refs.checkBtn,
            todoItem = this.refs.todoItem,
            title= this.refs.title,
            info = this.refs.info;
        if(!this.isClassActive){
            className += 'editTodo active';
            checkBtn.setAttribute('disabled',"disabled");
            deleteBtn.setAttribute('disabled',"disabled");
            this.isClassActive = true;
            title.value = this.title;
            info.value = this.info;
        }else{
            deleteBtn.removeAttribute('disabled');
            checkBtn.removeAttribute('disabled');
            this.isClassActive = false;

            this.props.functions.update(this.index,title.value,info.value);
        }
        editContainer.className = className;
    }
    update(title,info){
    }
    render(){
        var {data: {title,compiled,info},index} = this.props;
        this.index = index;
        this.compiled = compiled;
        this.title = title;
        this.info = info;
        return (
            <div className="todoItem" ref="todoItem">  
                <div className="todoContent">
                    <p>title: {title} <input type="checkbox" onChange = {this.check.bind(this)} checked={compiled}/></p>
                    <p>info: {info}</p>
                </div>
                <div className="editTodo" ref="editTodoCtn">
                    <p>title: <input ref="title"/></p>
                    <p>info: <textarea ref="info"></textarea></p>
                </div>
                <div className="todoControl">
                    <button id="deleteBtn" ref="deleteBtn" onClick={this.delete.bind(this)}>delete</button>
                    <button id="checkBtn" ref="checkBtn" onClick={this.check.bind(this)}>check</button>
                    <button id="editBtn" onClick={this.edit.bind(this)}>edit</button>
                </div>
            </div>
        )
    }
}
