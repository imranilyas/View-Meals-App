import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";

const SpecificMeal = () => {
	const route = useRoute();
	const meal = MEALS.find((food) => food.id === route.params.id);

	return (
		<ScrollView>
			<Image
				resizeMode="stretch"
				source={{ uri: meal.imageUrl }}
				style={styles.img}
			/>
			<Text style={styles.mealTitle}>{meal.title}</Text>
			<View>
				<Text style={styles.textContainer}>
					{meal.affordability.toUpperCase()}
				</Text>
				<Text style={styles.text}>{meal.complexity.toUpperCase()}</Text>
				<Text style={styles.text}>{meal.duration}m</Text>
			</View>
			<View>
				<Text>
					{meal.isGlutenFree ? "Gluten Free" : "Contains Gluten"}
				</Text>
				<Text>
					{meal.isVegetarian ? "Vegetarian" : "Not Vegetarian"}
				</Text>
				<Text>{meal.isVegan ? "Vegan" : "Not Vegan"}</Text>
			</View>

			<Text>Ingredients</Text>
			<View>
				{meal.ingredients.map((ingredient) => {
					return <Text>{ingredient}</Text>;
				})}
			</View>

			<Text>Directions</Text>
			<View>
				{meal.steps.map((step, index) => {
					return (
						<Text>
							{index}. {step}
						</Text>
					);
				})}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {},

	img: {
		// width: 400,
		height: 250,
	},

	mealTitle: {},

	textContainer: {},

	text: {},
});

export default SpecificMeal;
