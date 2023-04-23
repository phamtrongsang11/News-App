import React, { useState } from 'react';
import { Image } from 'react-native-expo-image-cache';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import colors from '../config/colors';

const Source = ({ name, description, category, country, url }) => {
	const goToSource = () => {
		WebBrowser.openBrowserAsync(url);
	};
	return (
		<Pressable onPress={goToSource}>
			<View style={styles.container}>
				<Image
					style={styles.image}
					tint="light"
					uri="https://media.istockphoto.com/id/1345526206/video/network-data-globe-hologram-loop-motion-graphics-background-for.jpg?s=640x640&k=20&c=2Ig2LeOK09xBJCh5fjYVCIaSNzHXAlHlm6amzKnW_ys="
				/>
				<View style={styles.detailsContainer}>
					<Text style={styles.name}>{name}</Text>
					{description && (
						<Text style={styles.description} numberOfLines={4}>
							{description}
						</Text>
					)}
					<View style={styles.detailsInfo}>
						<Text style={styles.details}>{category}</Text>
						<Text style={styles.details}>{country}</Text>
					</View>
				</View>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
		overflow: 'hidden',
	},
	detailsContainer: {
		padding: 20,
	},
	image: {
		height: 200,
		width: '100%',
	},
	name: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	description: {
		fontSize: 15,
		marginTop: 10,
	},
	detailsInfo: {
		fontSize: 15,
		marginTop: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	details: {
		color: colors.medium,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
});

export default Source;
