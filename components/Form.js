import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Searchbar, Button } from 'react-native-paper';

export default class Form extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Searchbar 
          placeholder=" Search Here "
        />
        <View style={styles.buttonWrap}>
          <View style={styles.startButton}>
            <Button mode='outlined'>
              Select Start    
            </Button>
          </View>
          <View style={styles.endButton}>
            <Button mode='outlined'>
              Select End   
            </Button>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
  },

  buttonWrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },

  startButton: {
    alignItems: 'stretch',
  },

  endButton: {
    alignItems: 'stretch',
  },

  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 100,
    zIndex: 99,
  },


});


/*
        <View style={styles.picker}>
     
            <RNPickerSelect 
              placeholder={{ label: 'Origin', value: null }}
              items={this.state.locations}
            />
         
          
            <RNPickerSelect 
               placeholder={{ label: 'Destination', value: null }}
               items={this.state.locations}
            />
        
        </View>
*/
