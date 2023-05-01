import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Modal,
	Button,
	FlatList,
	Text,
} from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from './Screen';
import PickerItem from './PickerItem';
import colors from '../config/colors';
import Separator from './Seperator';
import useOffline from '../hooks/useOffline';

const AppPicker = ({
	icon,
	placeholder,
	items,
	numberOfColumns = 1,
	onSelectItem,
	selectedItem,
	PickerItemComponent = PickerItem,
	width = '100%',
}) => {
	const [modalVisible, setModalVisible] = useState(false);
	const isOffline = useOffline();
	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(!isOffline)}>
				<View style={[styles.container, { width }]}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={colors.medium}
							style={styles.icon}
						/>
					)}
					{selectedItem ? (
						<Text style={styles.text}>{selectedItem.name}</Text>
					) : (
						<Text style={styles.placeholder}>{placeholder}</Text>
					)}
					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					<Button title="Close" onPress={() => setModalVisible(false)} />
					<FlatList
						style={styles.containerList}
						data={items}
						keyExtractor={(item) => item.id}
						numColumns={numberOfColumns}
						renderItem={({ item }) => (
							<PickerItemComponent
								item={item}
								onPress={() => {
									setModalVisible(false);
									onSelectItem(item);
								}}
							/>
						)}
						ItemSeparatorComponent={<Separator />}
					/>
				</Screen>
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		borderRadius: 25,
		flexDirection: 'row',
		padding: 10,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
	text: {
		flex: 1,
	},
	placeholder: {
		color: colors.medium,
		flex: 1,
	},
	containerList: {
		padding: 10,
	},
});

export default AppPicker;
