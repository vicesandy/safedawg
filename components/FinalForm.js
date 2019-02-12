import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import DateTimerPicker from 'react-native-modal-datetime-picker';
import { TextInput, Button, DataTable } from 'react-native-paper';

const today = new Date();
const dayOfWeek = today.getDay();

export default class FinalForm extends React.Component {
	state = {
		isDateTimePickerVisible: false,
		
		name: '',
		dawg: '',
		email: '',
		Phone_Number: '',
		date: '',
		time: '',
	};

	_showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

	_hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

	_handleDatePicker = (date) => {

	};



	render() {
		return(
			<View>
				<View>
				  <Text>{dayOfWeek}</Text>
				  
				</View>
				  <View>
					<TextInput 
						mode='outlined'
						label='Enter Name'
						value={this.state.name}
					/>

					<TextInput 
						mode='outlined'
						label='Enter DawgTag'
						value={this.state.dawg}
					/>
				
					<TextInput 
						mode='outlined'
						label='Enter Email'
						value={this.state.email}
					/>
				
					<TextInput 
						mode='outlined'
						label='Select Date & Time'
						value={this.state.dateTime}
					/>
			  </View>
			</View>
		);
	}
}