import { StyleSheet, View, Text, Pressable, Image } from "react-native";

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
				<View style={styles.innerContainer}>
					<View style={styles.imgContainer}>
						<Image
							style={styles.img}
							source={{
								uri: meal.imageUrl,
							}}
						/>
					</View>
					<Text style={styles.mealName}>{meal.title}</Text>
					<View style={styles.textContainer}>
						<Text style={styles.text}>
							{meal.affordability.toUpperCase()}
						</Text>
						<Text style={styles.text}>
							{meal.complexity.toUpperCase()}
						</Text>
						<Text style={styles.text}>{meal.duration}m</Text>
					</View>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 10,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 3 },
		shadowRadius: 4,
		shadowOpacity: 0.5,
	},

	pressed: {
		opacity: 0.5,
	},

	innerContainer: {
		backgroundColor: "#cccccc",
		justifyContent: "center",
		alignContent: "center",
		overflow: "hidden",
		borderRadius: 8,
	},

	imgContainer: {
		// borderBottomWidth: 2,
		// borderBottomColor: "white",
	},

	img: {
		height: 200,
		width: 450,
		alignSelf: "center",
	},

	mealName: {
		textAlign: "center",
		fontSize: 20,
		paddingVertical: 6,
	},

	textContainer: {
		flexDirection: "row",
		justifyContent: "center",
		paddingVertical: 6,
	},

	text: {
		color: "black",
		marginHorizontal: 5,
		fontWeight: "bold",
		fontStyle: "italic",
	},
});

export default MealCard;
