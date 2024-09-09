import { useState } from 'react';

import { StyleSheet, View, FlatList, Button } from 'react-native';

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
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id)
    })
  }

  const startAddGoalHandler = () => {
    setIsModalOpen(true);
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler} />
      <GoalInput enteredGoalText={enteredGoalText} goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} isModalOpen={isModalOpen} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} keyExtractor={(item) => item.id} renderItem={(goal) => {
          return (
            <GoalItem goalItem={goal.item} onDeleteGoal={deleteGoalHandler}/>
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
