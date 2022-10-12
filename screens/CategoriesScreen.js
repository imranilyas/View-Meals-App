import { StyleSheet, View, Text, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const Categories = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={CATEGORIES}
				renderItem={(category) => {
					return (
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
