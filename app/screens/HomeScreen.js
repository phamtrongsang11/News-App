import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import Article from '../components/Article';
import news from '../api/news';
import useApi from '../hooks/useApi';
import Screen from '../components/Screen';
import AppPicker from '../components/AppPicker';
import data from '../../data';
import colors from '../config/colors';
import CategoryPickerItem from '../components/CategoryPickerItem';
import ActivityIndicator from '../components/ActivityIndicator';
import NextButton from '../components/NextButton';
import { useNetInfo } from '@react-native-community/netinfo';
import Error from '../components/Error';

const ListHeader = ({ country, setCountry, category, setCategory }) => {
	return (
		<>
			<Text style={styles.title}>#HEADLINES</Text>
			<View style={styles.containerPicker}>
				<AppPicker
					placeholder="Country"
					items={data.countries}
					selectedItem={country}
					onSelectItem={(item) => setCountry(item)}
					width="48%"
					numberOfColumns={2}
					icon="flag"
				/>
				<AppPicker
					items={data.category}
					placeholder="Category"
					selectedItem={category}
					onSelectItem={(item) => setCategory(item)}
					width="48%"
					numberOfColumns={2}
					icon="format-list-text"
					PickerItemComponent={CategoryPickerItem}
				/>
			</View>
		</>
	);
};

const HomeScreen = () => {
	const [category, setCategory] = useState(data.category[0]);
	const [country, setCountry] = useState(data.countries[0]);
	const [page, setPage] = useState(1);
	const [refreshing, setRefreshing] = useState(false);

	const flatListRef = React.useRef();
	const netInfo = useNetInfo();

	const newsApi = useApi(news.getHeadlines);

	useEffect(() => {
		newsApi.request(country, category, page);
	}, [country, category, page]);

	return (
		<>
			<ActivityIndicator visible={newsApi.loading} />
			{newsApi.error && <Error error={newsApi.error} />}
			<Screen style={styles.container}>
				<FlatList
					ref={flatListRef}
					data={newsApi.data.articles}
					renderItem={({ item }) => (
						<Article
							urlToImage={item.urlToImage}
							title={item.title}
							description={item.description}
							author={item.author}
							publishedAt={item.publishedAt}
							source={item.source.name}
							url={item.url}
						/>
					)}
					keyExtractor={(item) => item.title}
					refreshing={refreshing}
					onRefresh={() => {
						setPage(1);
						newsApi.request(country, category, 1);
					}}
					ListHeaderComponent={
						<ListHeader
							country={country}
							setCountry={setCountry}
							category={category}
							setCategory={setCategory}
						/>
					}
					ListFooterComponent={
						newsApi.data.articles &&
						netInfo.isInternetReachable && (
							<NextButton
								title="More Article"
								onPress={() => {
									setPage(page + 1);
									flatListRef.current.scrollToOffset({
										animated: true,
										offset: 0,
									});
								}}
							/>
						)
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
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: colors.primary,
		textAlign: 'center',
		marginTop: 5,
	},
});

export default HomeScreen;
