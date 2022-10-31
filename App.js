import { StyleSheet } from "react-native";
import { Provider } from "react-redux";

import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "./constants/colors";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FavoritesScreen from "./screens/FavoritesScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreen from "./screens/MealsScreen";
import SpecificMealScreen from "./screens/SpecificMealScreen";
import { store } from "./redux/store";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
	const StackNav = () => {
		return (
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: COLORS.headerColor,
					},
					headerTintColor: COLORS.headerFontColor,
					contentStyle: {
						backgroundColor: COLORS.backgroundContentColor,
					},
				}}
			>
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
			<StatusBar style="light" />
			<Provider store={store}>
				<NavigationContainer>
					<Tab.Navigator
						sceneContainerStyle={{
							backgroundColor: COLORS.backgroundContentColor,
						}}
						screenOptions={{
							// Bottom Tab
							tabBarStyle: {
								backgroundColor: COLORS.headerColor,
							},
							tabBarActiveTintColor: COLORS.iconActive,
							tabBarInactiveTintColor: COLORS.iconInactive,

							// Top Tab
							headerStyle: {
								backgroundColor: COLORS.headerColor,
							},
							headerTintColor: COLORS.headerFontColor,
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
			</Provider>
		</>
	);
}

const styles = StyleSheet.create({});
