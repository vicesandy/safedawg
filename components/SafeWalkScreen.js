import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator, Header, StackNavigator, } from 'react-navigation';
import { View, StyleSheet, } from 'react-native';

import SafeWalkMap from '../components/Map';
import Form from '../components/Form';

export default class SafeWalkScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchTerm: "passed",

    };
  }

  render() {
    console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`);

    return (
      <View style={styles.container}>
      	<Form />
        <SafeWalkMap />     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
  },
});