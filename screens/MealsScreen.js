import { StyleSheet, View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";

import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";

const Meals = () => {
	const route = useRoute();
	const navigate = useNavigation();

	const list = MEALS.filter((meal) =>
		meal.categoryIds.includes(route.params.id)
	);

	// console.log(list);

	useLayoutEffect(() => {
		navigate.setOptions({
			title: route.params.mealTitle,
		});
		console.log("inside useLayoutEffect");
	}, [route, navigate]);

	return (
		<View>
			<Text>{route.params.id}</Text>
			<Text>{route.params.mealTitle}</Text>
			<Text>{list.title}</Text>
			<Text>{list.affordability}</Text>
			<Text>{list.complexity}</Text>
			<Text>{list.imageUrl}</Text>
			<Text>{list.duration}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default Meals;
