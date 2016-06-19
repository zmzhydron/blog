import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  Navigator
} from 'react-native';
import TodoDetail from "./todoDetail";
import fakeData from './mockData.js';

export default class TodoList extends React.Component{
    constructor(props){
        super();
        var {data: fuckdata} = fakeData;
        var ds = new ListView.DataSource({ rowHasChanged: (r1,r2) => r1 !== r2 });
        this.state = {
            name: fuckdata.name,
            dataSource: ds.cloneWithRows(fuckdata.todoList)
        };
    }
    componentDidMount(){

    }
    renderTodo(item){
        var compiled = item.compiled ? "已经完成" : "加把劲！！"
        return (
            <View style={styles.fuckyou} >
                <Text style={styles.textStyles} onPress = {this.clicker.bind(this)}> {item.title}</Text>
                <Text style={styles.textStyles}> {item.info}</Text>
                <Text style={styles.textStyles}> {compiled}</Text>
            </View>
        );
    }
    clicker(e){
        console.log(e);
        const {navigator} = this.props;
        navigator.push({
            name: "todoDetail",
            component: TodoDetail,
            params: {
                name: "zmz",
                age: 28,
                status: {
                    skill: "leaning react-native",
                    progress: "stage-one"
                }
            },
            gogo: {
                type: "type r"
            }
        })
    }
    render(){
        return (
            <View style={styles.container}>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = {this.renderTodo.bind(this)}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  fuckyou:{
      borderColor: "red",
      borderStyle: "solid",
      borderWidth: 3,
      backgroundColor: "gray"
  },
  textStyles:{
      color: "lime",
      textAlign: "center",
      fontSize: 12
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
});
