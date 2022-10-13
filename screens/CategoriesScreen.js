import { StyleSheet, View, FlatList } from "react-native";
import CategoryButton from "../components/CategoryButton";
import { useNavigation } from "@react-navigation/native";

import { CATEGORIES } from "../data/dummy-data";

const Categories = () => {
	const navigate = useNavigation();

	const navigateToMealsScreen = (id, title) => {
		navigate.navigate("Meals", {
			id: id,
			mealTitle: title,
		});
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={CATEGORIES}
				renderItem={(category) => {
					return (
						<CategoryButton
							category={category.item}
							onPress={navigateToMealsScreen}
						/>
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
});

export default Categories;
