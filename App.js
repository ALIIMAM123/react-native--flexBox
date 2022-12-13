import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	SafeAreaView,
} from "react-native";

export default function App() {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.wrapperContainer}>
				<View style={styles.firstContainer}>
					<Text style={styles.textColor}>1</Text>
				</View>
				<View style={styles.secondContainer}>
					<Text style={styles.textColor}>2</Text>
				</View>
				<View style={styles.thirdContainer}>
					<Text style={styles.textColor}>3</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		paddingTop: 50,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "grey",
		height: "100%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	wrapperContainer: {
		height: "90%",
		width: "100%",
		backgroundColor: "white",
		borderRadius: 30,
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 20,
	},
	firstContainer: {
		backgroundColor: "red",
		width: 100,
		height: 100,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 10,
		borderRadius: 10,
		color: "white",
	},
	secondContainer: {
		backgroundColor: "blue",
		width: 100,
		height: 100,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 10,
		borderRadius: 10,
		color: "white",
	},
	thirdContainer: {
		backgroundColor: "green",
		width: 100,
		height: 100,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		color: "white",
		marginBottom: 10,
	},
	textColor: {
		color: "white",
		fontWeight: "bold",
		fontSize: 30,
	},
});
