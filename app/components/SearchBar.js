import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import useOffline from '../hooks/useOffline';

const SearchBar = ({ searchText, setSearchText, onSubmit }) => {
	const isOffline = useOffline();
	return (
		<View style={styles.container}>
			<TextInput
				editable={!isOffline}
				style={styles.input}
				placeholder="Search"
				value={searchText}
				onChangeText={(text) => setSearchText(text)}
				onSubmitEditing={onSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 12,
	},
	input: {
		backgroundColor: '#fff',
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 50,
		borderWidth: 1,
	},
});

export default SearchBar;
