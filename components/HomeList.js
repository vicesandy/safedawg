import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import HomeItem from './HomeItem';

const data = [
	{
		title: 'title1',
	},
	{
		title: 'title2',
	}
];

export default class HomeList extends Component {
	renderItem = ({ item }) => {
		return <HomeItem  item={item} />
	};

	render() {
		return(
			<FlatList 
				data={data}
				renderItem={this.renderItem}
				showsVerticalScrollIndicator={false}
			/>
		);
	}
}

const styles = StyleSheet.create({

});