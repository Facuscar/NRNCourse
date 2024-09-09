import { View, Text, Pressable } from "react-native";

import { StyleSheet } from "react-native";

const GoalItem = ({ goalItem, onDeleteGoal }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable onPress={() => onDeleteGoal(goalItem.id)} android_ripple="#dddddd" style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{goalItem.text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5
  },
})