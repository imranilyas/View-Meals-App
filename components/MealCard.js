import { StyleSheet, View, Text, Pressable } from "react-native";

const MealCard = ({ meal, onPress }) => {
	const navigateHandler = () => {
		onPress(meal.id);
	};

	return (
		<View style={styles.container}>
			<Pressable
				onPress={navigateHandler}
				style={({ pressed }) => pressed && styles.pressed}
			>
				<View>
					<Image source={{ uri: meal.imageUrl }} style={styles.img} />
					<Text>{meal.title}</Text>
					<View style={styles.textContainer}>
						<Text style={styles.text}>{meal.affordability}</Text>
						<Text style={styles.text}>{meal.complexity}</Text>
						<Text style={styles.text}>{meal.duration}</Text>
					</View>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
	},

	pressed: {
		opacity: 0.5,
	},

	img: {
		height: 200,
		width: 400,
	},

	textContainer: {
		flexDirection: "row",
	},

	text: {
		color: "#cccccc",
	},
});

export default MealCard;