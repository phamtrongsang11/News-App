import axios from 'axios';
import { useState } from 'react';

export default useApi = (apiFunction) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const request = async (...args) => {
		setLoading(true);
		const response = await apiFunction(...args);
		setLoading(false);

		setError(!response.ok);
		setData(response.data);
	};

	return { data, error, loading, request };
};

// const request = async (...args) => {
// 	try {
// 		setLoading(true);
// 		const response = await apiFunction(...args);
// 		setData(response.data);
// 	} catch (error) {
// 		setError(error.message);
// 	}
// 	setLoading(false);
// };
