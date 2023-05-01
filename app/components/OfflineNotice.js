import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import colors from '../config/colors';

import useOffline from '../hooks/useOffline';
const OfflineNotice = () => {
	const isOffline = useOffline();
	if (isOffline) {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>No Internet Connection</Text>
			</View>
		);
	}
	return null;
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
		color: colors.white,
	},
});

export default OfflineNotice;
