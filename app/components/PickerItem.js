import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../config/colors';

const PickerItem = ({ item, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Text style={styles.name}>{item.name}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 15,
		borderColor: colors.black,
		borderWidth: 1,
		borderRadius: 50,
		margin: 10,
	},
	name: {
		fontSize: 17,
		fontWeight: 'bold',
	},
	id: {
		fontSize: 15,
		color: colors.medium,
	},
});

export default PickerItem;
