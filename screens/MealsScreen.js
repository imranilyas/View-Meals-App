import { StyleSheet, View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";

import { useRoute } from "@react-navigation/native";

const Meals = () => {
	const route = useRoute();
	const list = MEALS.filter((meal) =>
		meal.categoryIds.includes(route.params.id)
	);

	console.log(list);

	return (
		<View>
			<Text>{route.params.id}</Text>
			<Text>{route.params.mealTitle}</Text>
			<Text>{}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default Meals;
