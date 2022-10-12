import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FavoritesScreen from "./screens/FavoritesScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreen from "./screens/MealsScreen";
import SpecificMealScreen from "./screens/SpecificMealScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
	const StackNav = () => {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="Stack"
					component={CategoriesScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="Meals" component={MealsScreen} />
				<Stack.Screen
					name="SpecificMeal"
					component={SpecificMealScreen}
				/>
			</Stack.Navigator>
		);
	};

	return (
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen
						name="Categories"
						component={StackNav}
						options={
							{
								// headerShown: false,
							}
						}
					/>
					<Tab.Screen
						name="Favorites"
						component={FavoritesScreen}
						options={{}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
