import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState("");

	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

	function addGoalHandler() {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText("");
	}

	return (
		<View style={styles.inputWrapperContainer}>
			<TextInput
				style={styles.InputTextContainer}
				placeholder="Your Course Goals !!"
				value={enteredGoalText}
				onChangeText={goalInputHandler}
			/>

			<Button title="Button" onPress={addGoalHandler} />
		</View>
	);
}
export default GoalInput;

const styles = StyleSheet.create({
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
});
