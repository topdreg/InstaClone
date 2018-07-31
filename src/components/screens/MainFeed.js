import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from '../../config';
import { PostFeed } from '../container';

class InstaClone extends Component {
	render() {
		return(
			<View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
				<View style={styles.tempNav}>
					<Text>AppFront</Text>
					<PostFeed />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	tempNav: { 
		width: 100 + "%", 
		height: 100 + "%", 
		backgroundColor:'rgb(250,250,250)',
		borderBottomColor: 'rgb(233,33,233)',
		borderBottomWidth: StyleSheet.hairlineWidth,
		justifyContent: "center",
		alignItems: "center"
	}
});

export default InstaClone;
