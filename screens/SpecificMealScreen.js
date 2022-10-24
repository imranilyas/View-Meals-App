import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";

const SpecificMeal = () => {
	const route = useRoute();
	const meal = MEALS.find((food) => food.id === route.params.id);

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<Image
				resizeMode="stretch"
				source={{ uri: meal.imageUrl }}
				style={styles.img}
			/>

			<Text style={styles.mealTitle}>{meal.title}</Text>

			<View style={styles.textContainer}>
				<Text style={styles.text}>
					{meal.affordability.toUpperCase()}
				</Text>
				<Text style={styles.text}>{meal.complexity.toUpperCase()}</Text>
				<Text style={styles.text}>{meal.duration}m</Text>
			</View>

			<View style={styles.textContainer}>
				<Text style={styles.cautionText}>
					{meal.isGlutenFree ? "Gluten Free" : "Contains Gluten"}
				</Text>
				<Text style={styles.cautionText}>
					{meal.isVegetarian ? "Vegetarian" : "Not Vegetarian"}
				</Text>
				<Text style={styles.cautionText}>
					{meal.isVegan ? "Vegan" : "Not Vegan"}
				</Text>
			</View>

			<View style={styles.titleContainer}>
				<Text style={styles.titles}>Ingredients</Text>
			</View>

			<View style={styles.listContainer}>
				{meal.ingredients.map((ingredient) => {
					return (
						<View
							key={ingredient}
							style={styles.listInnerContainer}
						>
							<Text
								style={[styles.list, styles.bullet]}
							>{`\u2022`}</Text>
							<Text style={styles.list}>{ingredient}</Text>
						</View>
					);
				})}
			</View>

			<View style={styles.titleContainer}>
				<Text style={styles.titles}>Directions</Text>
			</View>

			<View style={styles.listContainer}>
				{meal.steps.map((step, index) => {
					return (
						<View style={styles.listInnerContainer} key={step}>
							<Text style={[styles.list, styles.bullet]}>
								{index + 1}.
							</Text>
							<Text style={styles.list}>{step}</Text>
						</View>
					);
				})}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	img: {
		height: 275,
	},

	mealTitle: {
		textAlign: "center",
		fontSize: 22,
		fontWeight: "bold",
		marginVertical: 5,
	},

	textContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginVertical: 5,
	},

	text: {
		marginHorizontal: 5,
		fontStyle: "italic",
		color: "#484848",
	},

	cautionText: {
		marginHorizontal: 5,
		fontWeight: "bold",
		fontStyle: "italic",
		textDecorationLine: "underline",
	},

	titleContainer: {
		borderBottomWidth: 2,
		marginHorizontal: 40,
		marginVertical: 10,
	},

	titles: {
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold",
		padding: 10,
	},

	listContainer: {
		marginHorizontal: 40,
	},

	listInnerContainer: {
		flexDirection: "row",
		marginVertical: 4,
	},

	bullet: {
		width: "10%",
	},

	list: {
		fontSize: 16,
		width: "90%",
	},
});

export default SpecificMeal;
