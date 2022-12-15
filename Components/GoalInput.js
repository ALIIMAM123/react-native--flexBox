import { useState } from "react";
import {
	StyleSheet,
	View,
	Button,
	TextInput,
	Modal,
	Image,
} from "react-native";

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
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputWrapperContainer}>
				<Image
					source={require("../assets/pixelImg.jpg")}
					style={styles.image}
				/>
				<TextInput
					style={styles.InputTextContainer}
					placeholder="Your Course Goals !!"
					value={enteredGoalText}
					onChangeText={goalInputHandler}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={props.onCancel} color="#f31282" />
					</View>
				</View>
			</View>
		</Modal>
	);
}
export default GoalInput;

const styles = StyleSheet.create({
	inputWrapperContainer: {
		// flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		// marginBottom: 24,
		borderBottomWidth: 1,
		// borderBottomColor: "red",
		flex: 1,
		backgroundColor: "black",
		padding: 10,
	},
	InputTextContainer: {
		padding: 10,
		borderWidth: 2,
		borderColor: "grey",
		width: "95%",
		fontSize: 20,
		// marginRight: 10,
		color: "#5e0acc",
		borderRadius: 10,
		backgroundColor: "#ebd5f7",
		borderRadius: 7,
		cursor: "pointer",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		// width:
	},
	button: {
		width: "30%",
		marginHorizontal: 8,
		marginTop: 10,
	},
	image: {
		height: 500,
		width: 400,
		margin: 20,
	},
});
