import React, { Component } from 'react';
import { Header, StyleSheet, View, Image} from 'react-native';

import siulogo from '../images/siulogo.png';

export default class LogoHeader extends Component {
  render(){
  	return (
  	  <View style={styles.container} >
  	  	<Image source={siulogo} />
  	  </View>
  	)
  }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'red',
		justifyContent: 'center',
	},
});