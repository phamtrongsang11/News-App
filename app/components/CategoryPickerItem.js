import { View, Text } from 'react-native';
import React from 'react';
import Icon from './Icon';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

const CategoryPickerItem = ({ item, onPress }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress}>
				<Icon
					backgroundColor={item.backgroundColor}
					name={item.icon}
					size={80}
				/>
				<Text style={styles.label}>{item.name}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 15,
		alignItems: 'center',
		width: '50%',
	},
	label: {
		marginTop: 5,
		textAlign: 'center',
		fontSize: 16,
	},
});

export default CategoryPickerItem;
