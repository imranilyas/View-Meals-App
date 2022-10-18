import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

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
						title: "Categories",
					}}
				/>
				<Stack.Screen name="Meals" component={MealsScreen} />
				<Stack.Screen
					name="SpecificMeal"
					component={SpecificMealScreen}
					options={{
						title: "Meal Details",
					}}
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
						options={{
							headerShown: false,
							tabBarIcon: ({ color, size }) => (
								<Ionicons
									name="ios-list-outline"
									color={color}
									size={size}
								/>
							),
						}}
					/>
					<Tab.Screen
						name="Favorites"
						component={FavoritesScreen}
						options={{
							tabBarIcon: ({ color, size }) => (
								<Ionicons
									name="ios-star-outline"
									color={color}
									size={size}
								/>
							),
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({});
