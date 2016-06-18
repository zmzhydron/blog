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
  View,
  Navigator
} from 'react-native';
import fakeData from './widgets/mockData.js';
import TodoDetail from "./widgets/todoDetail";
class androidOne extends Component {
    constructor(){
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
    clicker(e){
        console.log(this);
        // <ListView
        //     dataSource = {this.state.dataSource}
        //     renderRow = {this.renderTodo.bind(this)}
        // />
    }
    render() {
        return (
        <View>
            <View style={styles.container}>

            </View>
            <Navigator
                initialRoute={{ name: "TodoDetail", component: TodoDetail }}
                configureScene={(route) => {
                  return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route, navigator) => {
                  let Component = route.component;
                  return <Component params = {"widget params"} navigator={navigator} />
            }} />
        </View>
        );
    }
    renderTodo(item){
        var compiled = item.compiled ? "已经完成" : "加把劲！！"
        return (
            <View style={styles.fuckyou} >
                <Text style={styles.textStyles} onPress = {this.clicker.bind(this)}> {item.title}</Text>
                <Text style={styles.textStyles} onPress = {this.clicker.bind(this)}> {item.info}</Text>
                <Text style={styles.textStyles} onPress = {this.clicker.bind(this)}> {compiled}</Text>
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

AppRegistry.registerComponent('androidOne', () => androidOne);
