import { useState } from "react";

import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	// Adding Modal function
	function startAddGoalHandler() {
		setModalIsVisible(true);
	}

	// Ending Modal function
	function endAddGoalHandler() {
		setModalIsVisible(false);
	}

	//   Adding CourseGoals

	function onAddGoalHandler(enteredTextGoal) {
		setCourseGoals((currentCourseGoal) => [
			...currentCourseGoal,
			{ text: enteredTextGoal, id: Math.random().toString() },
		]);
		endAddGoalHandler();
	}

	// Delete pressable Handler
	function deleteGoalHandler(id) {
		setCourseGoals((currentCourseGoal) => {
			return currentCourseGoal.filter((goal) => goal.id !== id);
		});
		// console.log("DELETE");
	}

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<Button
					title="Add New Goal"
					color="#5e0acc"
					onPress={startAddGoalHandler}
				/>
				<GoalInput
					visible={modalIsVisible}
					onAddGoal={onAddGoalHandler}
					onCancel={endAddGoalHandler}
				/>
				<View style={styles.goalsContainer}>
					<FlatList
						data={courseGoals}
						renderItem={(itemData) => {
							return (
								<GoalItem
									text={itemData.item.text}
									id={itemData.item.id}
									onDeleteItem={deleteGoalHandler}
								/>
							);
						}}
						keyExtractor={(item, index) => {
							return item.id;
						}}
						alwaysBounceVertical={false}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		// backgroundColor: "black",
		paddingTop: 50,
		paddingHorizontal: 10,
		flex: 1, //all the available height because of main container
	},

	goalsContainer: {
		flex: 4,
		// backgroundColor: "green",
	},
});
