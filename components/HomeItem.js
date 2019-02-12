import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import Metrics from '../config/Metrics';
import Icon from 'react-native-vector-icons/Entypo';

const warning = `warning`;
const color = `red`;

const HomeIist = ({ data }) => (
			<View style={styles.homeContainer}>
			<Card style={styles.card}>
			
			  <View style={styles.cardView}>
			  	<View style={styles.titleView}>
			  	  <Icon name={warning} size={60} color={color} />

			  	  <View >
			  	  	<Text style={styles.titleText}>{data}</Text>
			  	  </View>

			  	  <View style={styles.footer}>
			  	  	<Button>
			  	  		View More
			  	  	</Button>
			  	  </View>
			  	</View>
			  </View>
			
			</Card>
			</View>
);



const styles = StyleSheet.create({
	card: {
		width: Metrics.screenWidth / 2.5,
		height: Metrics.screenHeight / 4.6,
		margin: 5,
		flexDirection: 'column',
		shadowColor: '#000',
		shadowOpacity: 0.8,
		shadowOffset: { width: 0, height: 0.5 },

	},

	cardView: {
		width: Metrics.screenWidth / 2.5,
		height: Metrics.screenHeight / 5.6,
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	titleView: {
		alignItems: 'center',
		paddingTop: 10,
		justifyContent: 'center',
	},

	titleText: {
		color: 'black',
		textAlign: 'center',
		padding: 5,
		fontWeight: 'bold',
		fontSize: 15,
		paddingBottom: 15,

	},

	textView: {
		marginTop: 4,
		color: 'grey',
		textAlign: 'center',
	},

	footer: {
		width: Metrics.screenWidth / 2.5 -16,
		paddingVertical: 1,
		alignItems: 'center',
		borderTopWidth: 0.5,
		borderTopColor: '#bdc3c7',
	}
});

export default HomeIist;