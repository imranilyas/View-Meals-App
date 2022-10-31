import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

import MealCard from "../components/MealCard";
import { MEALS } from "../data/dummy-data";

const Favorites = () => {
	const ids = useSelector((state) => state.favorite.ids);
	const list = MEALS.filter((meal) => {
		ids.includes(meal.id);
	});

	const navigate = useNavigation();

	const navigateToSpecificScreen = (mealId) => {
		navigate.navigate("SpecificMeal", { id: mealId });
	};

	if (ids.length === 0) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignContent: "center",
					margin: 30,
				}}
			>
				<Text
					style={{
						color: "#cccccc",
						textAlign: "center",
						borderWidth: 1,
						borderColor: "#cccccc",
						padding: 10,
						fontSize: 18,
						borderRadius: 6,
						paddingVertical: 30,
					}}
				>
					No meals have been favorited.
				</Text>
			</View>
		);
	}

	return (
		<View>
			<FlatList
				data={ids}
				renderItem={(element) => {
					const meal = MEALS.find((food) => food.id === element.item);
					return (
						<MealCard
							meal={meal}
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

export default Favorites;
