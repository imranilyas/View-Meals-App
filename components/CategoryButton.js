import { View, StyleSheet, Pressable, Text } from "react-native";

const CategoryButton = ({ category, onPress }) => {
	const pressHandler = () => {
		onPress(category.id, category.title);
	};

	return (
		<View style={styles.container}>
			<Pressable
				onPress={pressHandler}
				style={({ pressed }) => pressed && styles.pressed}
			>
				<View
					style={[
						styles.category,
						{ backgroundColor: category.color },
					]}
				>
					<Text style={styles.categoryText}>{category.title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
		marginVertical: 20,
	},
	pressed: {
		opacity: 0.6,
	},
	category: {
		width: 150,
		height: 150,
		justifyContent: "center",
		borderRadius: 20,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 4,
		shadowOpacity: 0.5,
	},
	categoryText: {
		alignSelf: "center",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default CategoryButton;
