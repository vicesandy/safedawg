import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import SafeWalkMap from './components/Map'; 
import SafeWalkScreen from './components/SafeWalkScreen';
import ArchiveScreen from './components/ArchiveScreen';
import Logo from './components/Logo';


/*
#import <GoogleMaps/GoogleMaps.h>
  [GMSServices provideAPIKey:@"AIzaSyBMN_3flueYs6wHIVqQiHO1_6JKNbIEcTA"];
*/

const MapStack = createStackNavigator({
  Map: {
    screen: SafeWalkScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Button 
                    title='Schedule'
                    onPress={() => navigation.navigate('Schedule')}
                  />, 
      headerRight: <Button
                    title="Next"
                    onPress={() => navigation.navigate('Form')}
                   />,

    }), 
  }
});

const ArchiveStack = createStackNavigator({
  archive: {
    screen: ArchiveScreen,
  }
});

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Southern Illinois Universivy Carbondale',
      headerStyle: {
        backgroundColor: '#8b0000',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#f0ffff',
      }
    },
  },
});

const RootStack = createBottomTabNavigator({
  Home: {
    screen: MapStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-home" size={25} color={tintColor} />
    }
  },

  Archive: {
    screen: ArchiveStack,
    navigationOptions: {
      tabBarLabel: 'Archive',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-archive" size={25} color={tintColor} />
    }
  },

  Map: {
    screen: MapStack,
    navigationOptions: {
      tabBarLabel: 'SafeWalk',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-walk" size={25} color={tintColor} />
    }
  }

});

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <RootStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },

});
