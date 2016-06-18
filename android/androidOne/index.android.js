/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View
} from 'react-native';
import fakeData from './widgets/mockData.js';
console.log(fakeData);
console.log("~~~~~~~~~~~~~~");
class androidOne extends Component {
    constructor(prop){
        super();
        var {data: fuckdata} = fakeData;
        var ds = new ListView.DataSource({ rowHasChanged: (r1,r2) => r1 !== r2 });
        this.state = {
            name: fuckdata.name,
            dataSource: ds.cloneWithRows(fuckdata.todoList)
        };
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    render() {
        return (
          <View style={styles.container}>
            <ListView
                dataSource = {this.state.dataSource}
                renderRow = {this.renderTodo.bind(this)}
            />
          </View>
        );
    }
    renderTodo(item){
        var compiled = item.compiled ? "已经完成" : "加把劲！！"
        return (
            <View style={styles.fuckyou}>
                <Text style={styles.textStyles}> {item.title}</Text>
                <Text style={styles.textStyles}> {item.info}</Text>
                <Text style={styles.textStyles}> {compiled}</Text>
            </View>
        );
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
      color: "green",
      textAlign: "center",
      fontSize: 25
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

AppRegistry.registerComponent('androidOne', () => androidOne);
