import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CATEGORIES } from "../data/dummy-data";

const Categories = () => {
	const navigate = useNavigation();

	const navigateToMealsScreen = () => {
		navigate.navigate("Meals");
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={CATEGORIES}
				renderItem={(category) => {
					return (
						<Pressable onPress={navigateToMealsScreen}>
							<View
								style={[
									styles.category,
									{ backgroundColor: category.item.color },
								]}
							>
								<Text style={styles.categoryText}>
									{category.item.title}
								</Text>
							</View>
						</Pressable>
					);
				}}
				numColumns={2}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	category: {
		borderRadius: 20,
		marginHorizontal: 20,
		marginVertical: 20,
		width: 150,
		height: 150,
		justifyContent: "center",
	},

	categoryText: {
		alignSelf: "center",
		fontSize: 16,
		padding: 20,
		fontWeight: "bold",
	},
});

export default Categories;
