import { useState } from 'react';

import { Button, StyleSheet, TextInput, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals((prevGoals) => [...prevGoals, { text: enteredGoalText, id: Math.random().toString() }])
    setEnteredGoalText("");
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput enteredGoalText={enteredGoalText} goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} keyExtractor={(item) => item.id} renderItem={(goal) => {
          return (
            <GoalItem goalItem={goal}/>
          )
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
