import { StyleSheet, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";

const SpecificMeal = () => {
	const route = useRoute();
	const meal = MEALS.find((food) => food.id === route.params.id);

	return (
		<View>
			<Text>{meal.title}</Text>
			<Text>Specific Meal</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SpecificMeal;
