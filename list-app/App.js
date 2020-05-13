import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = enteredGoal => {
    setCourseGoals((currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal }
    ]));

    setIsAddMode("false");
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId);
    });
  };

  const cancelGoalHandler = () => {
    setIsAddMode("false");
  }

  return (
    <View style={styles.screen} >
      <Button title="add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancelGoal={cancelGoalHandler} />

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
