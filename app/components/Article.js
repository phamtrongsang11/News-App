import React from 'react';
import { Image } from 'react-native-expo-image-cache';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import moment from 'moment';
import * as WebBrowser from 'expo-web-browser';
import colors from '../config/colors';
const Article = ({
	urlToImage,
	title,
	description,
	author,
	publishedAt,
	source,
	url,
}) => {
	const goToSource = () => {
		WebBrowser.openBrowserAsync(url);
	};
	return (
		<Pressable onPress={goToSource}>
			<View style={styles.container}>
				<Image
					style={styles.image}
					tint="light"
					uri={
						urlToImage
							? urlToImage
							: 'https://media.istockphoto.com/id/1345526206/video/network-data-globe-hologram-loop-motion-graphics-background-for.jpg?s=640x640&k=20&c=2Ig2LeOK09xBJCh5fjYVCIaSNzHXAlHlm6amzKnW_ys='
					}
				/>

				<View style={styles.detailsContainer}>
					<Text style={styles.title} numberOfLines={3}>
						{title}
					</Text>
					{description && (
						<Text style={styles.description} numberOfLines={5}>
							{description}
						</Text>
					)}
					<View style={styles.detailsInfo}>
						<View style={styles.data}>
							<Text>
								Source: <Text style={styles.source}>{source}</Text>
							</Text>
							<Text style={styles.date}>
								{moment(publishedAt).format('MMM Do YY')}
							</Text>
						</View>
						{author && (
							<View style={styles.authorContainer}>
								<Text style={styles.heading}>
									By: <Text style={styles.author}>{author}</Text>
								</Text>
							</View>
						)}
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
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	description: {
		fontSize: 15,
		marginTop: 10,
	},
	detailsInfo: {
		fontSize: 15,
		marginTop: 20,
	},
	data: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	heading: {},
	source: {
		color: colors.secondary,
		fontWeight: 'bold',
	},
	date: {
		color: colors.medium,
	},
	author: { fontWeight: 'bold' },

	authorContainer: {
		marginTop: 10,
	},
});

export default Article;
