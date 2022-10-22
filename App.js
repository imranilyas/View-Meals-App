import { StyleSheet } from "react-native";
import { useState } from "react";
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
	const [starred, setStarred] = useState(false);

	const starHandler = () => {
		setStarred(!starred);
	};

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
						headerRight: () => (
							<Ionicons
								name="star"
								size={24}
								color={starred ? "gold" : "#999999"}
								onPress={starHandler}
							/>
						),
					}}
				/>
			</Stack.Navigator>
		);
	};

	return (
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={{
						tabBarActiveTintColor: "blue",
						tabBarInactiveTintColor: "red",
					}}
				>
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
