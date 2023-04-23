import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import colors from '../config/colors';

const Error = ({ error }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Could not retrieve the listings. {error}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		height: 30,
		width: '100%',
		position: 'absolute',
		top: Constants.statusBarHeight,
		zIndex: 1,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'white',
	},
});

export default Error;
