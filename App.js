import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import SearchScreen from './app/screens/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import colors from './app/config/colors';
import SourceScreen from './app/screens/SourceScreen';
import OfflineNotice from './app/components/OfflineNotice';

const Tab = createBottomTabNavigator();
export default function App() {
	return (
		<>
			<OfflineNotice />
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={{
						headerShown: false,
						tabBarActiveTintColor: colors.primary,
					}}
				>
					<Tab.Screen
						name="Home"
						component={HomeScreen}
						options={{
							tabBarIcon: () => (
								<Entypo name="home" size={24} color={colors.primary} />
							),
						}}
					/>
					<Tab.Screen
						name="Search"
						component={SearchScreen}
						options={{
							tabBarIcon: () => (
								<FontAwesome name="search" size={24} color={colors.primary} />
							),
						}}
					/>
					<Tab.Screen
						name="Source"
						component={SourceScreen}
						options={{
							tabBarIcon: () => (
								<FontAwesome name="tv" size={24} color={colors.primary} />
							),
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
