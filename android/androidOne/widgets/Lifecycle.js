import React, { Component } from 'react';
import {Text, View, Navigator, StyleSheet} from 'react-native';

export default class LifeCycle extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        console.log("LifeCycle componentDidMount");
    }
    compoentnWillMount(){
        console.log("LifeCycle compoentnWillMount");
    }
    componentWillReceiveProps(){
        console.log("LifeCycle componentWillReceiveProps");
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("LifeCycle shoudComponentUpdate");
        console.log(nextProps, nextState);
        console.log("******************************");
        return true;
    }
    componentWillUpdate(){
        console.log('LifeCycle componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('LifeCycle componentDidUpdate');
    }
    render(){
        let { name } = this.props;
        return (
            <View>
                <Text style={styles.text}> my name is {name} </Text>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    text:{
        fontSize: 14,
        color: "green",
        textAlign: "center"
    }
})
