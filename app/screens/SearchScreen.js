import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import news from '../api/news';
import useApi from '../hooks/useApi';
import colors from '../config/colors';
import ActivityIndicator from '../components/ActivityIndicator';
import Screen from '../components/Screen';
import Article from '../components/Article';
import Error from '../components/Error';

const SearchScreen = () => {
	const [searchText, setSearchText] = useState('');
	const flatListRef = React.useRef();

	const newsApi = useApi(news.searchArticles);
	const handleOnSubmit = () => {
		newsApi.request(searchText);
	};
	return (
		<>
			<ActivityIndicator visible={newsApi.loading} />
			{newsApi.error && <Error error={newsApi.error} />}
			<Screen style={styles.container}>
				<SearchBar
					searchText={searchText}
					setSearchText={setSearchText}
					onSubmit={handleOnSubmit}
				/>

				<FlatList
					ref={flatListRef}
					style={styles.containerList}
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
				/>
			</Screen>
		</>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, padding: 20, backgroundColor: colors.light },
	containerList: {
		marginTop: 10,
	},
	retry: {
		textAlign: 'center',
	},
});

export default SearchScreen;
