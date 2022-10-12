import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Favorites from "./screens/Favorites";
import Categories from "./screens/Categories";
import Meals from "./screens/Meals";
import SpecificMeal from "./screens/SpecificMeal";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
	const StackNav = () => {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="Stack"
					component={Categories}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="Meals" component={Meals} />
				<Stack.Screen name="SpecificMeal" component={SpecificMeal} />
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
						component={Favorites}
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
