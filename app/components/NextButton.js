import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../config/colors';

const NextButton = ({ title, onPress, color = 'primary' }) => {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: colors[color] }]}
			onPress={onPress}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		width: '80%',
		borderRadius: 25,
		justifyContent: 'center',
		alignContent: 'center',
		padding: 15,
		width: '100%',
		marginVertical: 10,
	},
	text: {
		color: colors.white,
		fontSize: 18,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export default NextButton;
