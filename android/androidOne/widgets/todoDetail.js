import React, { Component } from 'react';
import {Text, View, Navigator, StyleSheet} from 'react-native';


export default class todoDetail extends React.Component{
    constructor(props){
        super(props);
    }
    returnback(e){
        console.log(e);
    }
    render(){
        console.log("$$$$$$$$$$$$$$$$$$$$$$$~~$$$$$$$");
        return (
            <View>
                <Text style={styles.asdf}>this is a todo detail!!!</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    asdf: {
      fontSize:60,
      textAlign: 'center',
      color: "purple"
    }
})
