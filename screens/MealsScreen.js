import { StyleSheet, View, Text } from "react-native";

import { useRoute } from "@react-navigation/native";

const Meals = () => {
	const route = useRoute();

	return (
		<View>
			<Text>{route.params.id}</Text>
			<Text>{route.params.mealTitle}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default Meals;
