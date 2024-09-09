import { View, Text, Pressable } from "react-native";

import { StyleSheet } from "react-native";

const GoalItem = ({ goalItem, onDeleteGoal }) => {
  return (
    <Pressable onPress={() => onDeleteGoal(goalItem.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{goalItem.item.text}</Text>
      </View>
    </Pressable>
  )
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  }
})