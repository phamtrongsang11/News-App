import { View, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
const Screen = ({ children, style }) => {
	return (
		<SafeAreaView style={styles.screen}>
			<View style={[styles.view, style]}>{children}</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
	},
	view: {
		flex: 1,
	},
});

export default Screen;
