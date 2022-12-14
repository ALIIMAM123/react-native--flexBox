import { useState } from "react";

import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";

import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);

	function onAddGoalHandler(enteredGoalText) {
		setCourseGoals((currentCourseGoal) => [
			...currentCourseGoal,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
	}
	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={onAddGoalHandler} />
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return <GoalItem text={itemData.item.text} />;
					}}
					keyExtractor={(item, index) => {
						return item.id;
					}}
					alwaysBounceVertical={false}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		backgroundColor: "black",
		paddingTop: 50,
		paddingHorizontal: 10,
		flex: 1, //all the available height because of main container
	},

	goalsContainer: {
		flex: 4,
		// backgroundColor: "green",
	},
});
