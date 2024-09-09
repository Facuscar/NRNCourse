import { View, TextInput, Button, StyleSheet, Modal } from "react-native"

const GoalInput = ({ goalInputHandler, enteredGoalText, addGoalHandler, isModalOpen }) => {
   return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText} />
        <Button title='Add goal' onPress={addGoalHandler} />
      </View>
    </Modal>
   )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginBottom: 24,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
})