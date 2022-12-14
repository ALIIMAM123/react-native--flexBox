import { StyleSheet, View, Text } from "react-native";

function GoalInput(props) {
	return (
		<View style={styles.goalItem}>
			<Text style={styles.goalText}>{props.text}</Text>
		</View>
	);
}

export default GoalInput;

const styles = StyleSheet.create({
	goalItem: {
		borderRadius: 6,
		borderWidth: 1,
		backgroundColor: "#5e0acc",
		padding: 8,
		margin: 8,
		color: "white",
		fontSize: 20,
	},
	goalText: {
		color: "white",
	},
});
