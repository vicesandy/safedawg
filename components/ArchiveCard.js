import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native'
import { Card, CardTitle, ListItem, Button, } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';

export default class ArchiveCard extends React.Component {
	render() {
		//const { date, origin, destination, start_time, end_time } = this.props.article;
		return(
			<Card title="Safe Walk Request">
				<Text>Start Time</Text>
				<Text>End Time</Text>
				<Text>Origin</Text>
				<Text>Destination</Text>
				<Text>Status</Text>
				<Icon name="ios-checkmark" />
			</Card>
		);
	}
}