import React, { Component } from 'react';
import {Text, View, Navigator, StyleSheet} from 'react-native';
import TodoList from "./Todolist.js";
import LifeCycle from "./Lifecycle.js";
export default class todoDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "zhangmingzhi"
        }
    }
    returnback(){
        const { navigator } = this.props;
        navigator.push({
            name: "todoList",
            component: TodoList
        })
    }
    componentDidMount(){
        console.log("todoDetail Mount!!");
        console.log(this.props);
    }
    changeProps(){
        this.setState({
            name: "fuck you"
        })
    }
    render(){
        return (
            <View>
                <Text style={styles.asdf}> this is a todo detail!!!</Text>
                <Text style={styles.asdf} onPress = {this.returnback.bind(this)}>click me to return todoList</Text>
                <Text style={styles.asdf} onPress = {this.changeProps.bind(this)}>click me to changeProps</Text>
                <LifeCycle name={this.state.name} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    asdf: {
      fontSize:24,
      textAlign: 'center',
      color: "purple"
    }
})
