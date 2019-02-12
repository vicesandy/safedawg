import React, { Component } from 'react';
import { Header, Platform, StyleSheet, Text, View, Button, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import homepageLogo from '../images/police.png';

import HomeItem from './HomeItem';
import HomeList from './HomeList';


const welcome = `
	Welcome to Southern Illinois Unversity Department of Public Safety Safe Dawg app. 
`;

const warning = `
	In Case Of An Emergency, Call 911
`;

const emegency = `Emegency Procedure`;



export default class HomeScreen extends Component {
	render() {
		return(
			<View style={styles.homeContainer} >
				<View style={styles.headerContainer}>
					<Image source={homepageLogo}
						   style={styles.image}
					 />
					<Text style={styles.welcomeText}>{welcome}</Text>
				</View>

				<View style={styles.warningContainer}>
					<Icon name='warning' size={30} color='red' />
					<Text>{warning}</Text>
				</View>

				<View style={styles.listContainer}>
				  <View style={styles.item1}>
					<HomeItem data={emegency} />

					<HomeItem />
				  </View>

				  <View style={styles.item3}>	
					<HomeItem />
	
					<HomeItem />
				  </View>

				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	homeContainer: {
		flexDirection: 'column',
		flexWrap:  'wrap',
		backgroundColor: '#ffffff',
	},

	headerContainer: {
		height: 150,
		margin: 5,
		flexDirection: 'row',
	},

	image: {
		width: 95,
		height: 150,
		paddingLeft: 10,
	},

	welcomeText: {
		alignSelf: 'flex-end',
		marginLeft: 'auto',
		position: 'absolute',
		right: 0,
		left: 100,
		top: 0,
	},

	warningContainer: {
		flexDirection: 'row',
		borderRadius: 4,
		borderWidth: .5,
		borderColor: '#d6d7da',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
	},

	warningText: {
		color: 'red',
		alignSelf: 'flex-end',
	},

	listContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
		marginBottom: 33,
	},
	item1: {
		marginBottom: 3,
	},

	item3: {
		marginBottom: 3,
	}

});