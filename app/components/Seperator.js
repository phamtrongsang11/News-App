import { View, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../config/colors';

const Separator = ({ backgroundColor = colors.light }) => {
	return <View style={[styles.separator, backgroundColor]}></View>;
};

const styles = StyleSheet.create({
	separator: {
		width: '100%',
		height: 1.5,
		backgroundColor: colors.light,
	},
});

export default Separator;
