import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = enteredGoal => {
    setCourseGoals((currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal }
    ]));
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      console.log("your goal id is", goalId);
      return currentGoals.filter(goal => goal.key !== goalId);
    });
  };

  return (
    <View style={styles.screen} >

      <GoalInput addGoalHandler={addGoalHandler} />

      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
}); 
