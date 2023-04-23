import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import data from '../../data';
import AppPicker from '../components/AppPicker';
import useApi from '../hooks/useApi';
import news from '../api/news';
import ActivityIndicator from '../components/ActivityIndicator';
import Source from '../components/Source';
import colors from '../config/colors';
import Screen from '../components/Screen';
import Error from '../components/Error';

const ListHeader = ({ language, setLanguage }) => {
	return (
		<>
			<Text style={styles.title}>#SOURCE</Text>
			<View style={styles.containerPicker}>
				<AppPicker
					placeholder="Language"
					items={data.languages}
					selectedItem={language}
					onSelectItem={(item) => setLanguage(item)}
					numberOfColumns={2}
					icon="alpha"
					width="50%"
				/>
			</View>
		</>
	);
};

const SourceScreen = () => {
	const [language, setLanguage] = useState(data.languages[0]);
	const newsApi = useApi(news.getSourceByLanguage);

	useEffect(() => {
		newsApi.request(language);
	}, [language]);
	console.log(newsApi.data);

	return (
		<>
			<ActivityIndicator visible={newsApi.loading} />
			{newsApi.error && <Error error={newsApi.error} />}
			<Screen style={styles.container}>
				<FlatList
					data={newsApi.data.sources}
					renderItem={({ item }) => (
						<Source
							style={styles.containerList}
							name={item.name}
							description={item.description}
							category={item.category}
							country={item.country}
							url={item.url}
						/>
					)}
					keyExtractor={(item) => item.id}
					ListHeaderComponent={
						<ListHeader language={language} setLanguage={setLanguage} />
					}
				/>
			</Screen>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: colors.light,
	},
	containerPicker: {
		marginVertical: 10,
	},

	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: colors.primary,
		textAlign: 'center',
		marginTop: 5,
	},
	retry: {
		textAlign: 'center',
	},
});

export default SourceScreen;
