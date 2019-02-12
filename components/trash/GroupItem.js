import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-elements';
import Metrics from '../config/Metrics';
import Icon from 'react-native-vector-icons/Entypo';

export default class GroupItem extends Component {
	render() {
		const { item } = this.props;
		return (
			<Card style={styles.card}>
			  <View style={styles.cardView}>
			  	<View style={styles.titleView}>
			  	  <Icon name='warning' size={30} color='yellow' />
			  	  
			  	  <View style={styles.titleText}>
			  	  	<Text>Title</Text>
			  	  </View>

			  	  <View style={styles.textView}>
			  	  	<Text>Intro</Text>
			  	  </View>

			  	  <View style={styles.footer}>
			  	  	<Text>View More</Text>
			  	  </View>

			  	</View>
			  </View>
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	card: {
		width: Metrics.screenWidth / 2.5,
		height: Metrics.screenHeight / 3.6,
		margin: 5
	},

	cardView: {
		width: Metrics.screenWidth / 2.5,
		height: Metrics.screenHeight / 3.6,
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	titleView: {
		alignItems: 'center',
		padding: 8,
		paddingTop: 16,
	},

	titleText: {
		marginTop: 8,
		color: 'black',
		fontSize: 15,
		textAlign: 'center',

	},

	textView: {
		marginTop: 4,
		color: 'grey',
		fontSize: 12,
		textAlign: 'center'
	},

	footer: {
		width: Metrics.screenWidth / 2.5 -16,
		paddingVertical: 22,
		alignItems: 'center',
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: '#bdc3c7',
	}

});