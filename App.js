import { useState } from "react";

import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	ScrollView,
	FlatList,
} from "react-native";

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState("");
	const [courseGoals, setCourseGoals] = useState([]);

	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

	function addGoalHandler() {
		// setCourseGoals([...courseGoals , enteredGoalText])
		setCourseGoals((currentCourseGoal) => [
			...currentCourseGoal,
			enteredGoalText,
		]);
	}
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputWrapperContainer}>
				<TextInput
					style={styles.InputTextContainer}
					placeholder="Your Course Goals !!"
					onChangeText={goalInputHandler}
				/>

				<Button title="Button" onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				<ScrollView style={styles.goalsContainer}>
					{courseGoals.map((goal) => (
						<View>
							<Text style={styles.goalItem} key={goal}>
								{goal}
							</Text>
						</View>
					))}
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		backgroundColor: "black",
		paddingTop: 50,
		paddingHorizontal: 10,
		flex: 1, //al the available height because of
	},
	inputWrapperContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "red",
		flex: 1,
		// backgroundColor: "orange",
	},
	InputTextContainer: {
		padding: 10,
		borderWidth: 2,
		borderColor: "grey",
		width: "75%",
		fontSize: 20,
		marginRight: 10,
		color: "white",
		borderRadius: 10,
	},
	textColor: {
		// color: "red",
		// fontWeight: "900",
		// fontSize: 30,
	},
	goalsContainer: {
		flex: 4,
		// backgroundColor: "green",
	},
	goalItem: {
		borderRadius: 6,
		borderWidth: 1,
		backgroundColor: "#5e0acc",
		padding: 8,
		margin: 8,
		color: "white",
		fontSize: 20,
	},
});
