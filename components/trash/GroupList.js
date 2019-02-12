import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

import GroupItem from './GroupItem';

const data = [
	{
		name: 'name1',
		id: 1,
	},

	{
		name: 'name2',
		id: 2,
	}
];

export default class GroupList extends Component {
	keyExtractor = ({ item, index }) => index;

	renderItem = ({ item }) => {
		return <GroupItem item={item} />;
	};

	render() {
		return(
			<View style={styles.list}>
			<FlatList 
				data={data}
				renderItem={this.renderItem}
				keyExtractor={this.keyExtractor}
			/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	list: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center'
	}
});