import { View, Text } from "react-native";

import { StyleSheet } from "react-native";

const GoalItem = ({ goalItem }) => {
  return (
    <View style={styles.goalItem}>
    <Text style={styles.goalText}>{goalItem.item.text}</Text>
    </View>
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