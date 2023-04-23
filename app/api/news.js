import client from './client';

const API_KEY = 'd3a40c88b66746909a6badf2b8a5cbe4';

const getHeadlines = (country, category, page) => {
	return client.get(
		`/top-headlines?apiKey=${API_KEY}&country=${country.id}&category=${category.name}&page=${page}`
	);
};

const searchArticles = (query) => {
	return client.get(`/everything?q=${query}&apiKey=${API_KEY}`);
};

const getSourceByLanguage = (language) => {
	return client.get(
		`/top-headlines/sources?language=${language.id}&apiKey=${API_KEY}`
	);
};

export default {
	getHeadlines,
	searchArticles,
	getSourceByLanguage,
};
