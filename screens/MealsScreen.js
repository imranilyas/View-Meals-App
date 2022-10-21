import { StyleSheet, View, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";

import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import MealCard from "../components/MealCard";

const Meals = () => {
	const route = useRoute();
	const navigate = useNavigation();

	const list = MEALS.filter((meal) =>
		meal.categoryIds.includes(route.params.id)
	);

	const navigateToSpecificScreen = (mealId) => {
		navigate.navigate("SpecificMeal", { id: mealId });
	};

	useLayoutEffect(() => {
		navigate.setOptions({
			title: route.params.mealTitle,
		});
		console.log("inside useLayoutEffect");
	}, [route, navigate]);

	return (
		<View>
			<FlatList
				data={list}
				renderItem={(element) => {
					return (
						<MealCard
							meal={element.item}
							onPress={navigateToSpecificScreen}
						/>
					);
				}}
				showsVerticalScrollIndicator={false}
				alwaysBounceVertical={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default Meals;
