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

import TodoDetail from "./widgets/todoDetail";
class androidOne extends Component {
    constructor(){
        super();
    }
    componentDidMount(){
    }
    render() {
        var shit = {
            shitname: "myname",
            like: {
                name: "pussy"
            }
        }

        return (
            <Navigator
                initialRoute={{ name: "TodoDetail", component: TodoDetail }}
                renderScene={(route, navigator) => {
                  let Component = route.component;
                  return <Component gogo = {route.gogo} params = {route.params} navigator={navigator} />
            }} />
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
