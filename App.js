import { useState } from 'react';

import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals((prevGoals) => [...prevGoals, { text: enteredGoalText, id: Math.random().toString() }])
    setEnteredGoalText("");
    endAddGoalHandler();
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id)
    })
  }

  const startAddGoalHandler = () => {
    setIsModalOpen(true);
  }

  const endAddGoalHandler = () => {
    setIsModalOpen(false);
  }

  return (
    <>
    <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler} />
        <GoalInput
          enteredGoalText={enteredGoalText}
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          isModalOpen={isModalOpen}
          endAddGoalHandler={endAddGoalHandler}
          />
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} keyExtractor={(item) => item.id} renderItem={(goal) => {
            return (
              <GoalItem goalItem={goal.item} onDeleteGoal={deleteGoalHandler}/>
            )
          }} />
        </View>
      </View>
        </>
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
