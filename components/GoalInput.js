import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"

const GoalInput = ({ 
    endAddGoalHandler,
    goalInputHandler,
    enteredGoalText,
    addGoalHandler,
    isModalOpen,
  }) => {
   return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add goal' onPress={addGoalHandler} color={"#b180f0"} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={endAddGoalHandler} color={"#f31282"} />
          </View>
        </View>
      </View>
    </Modal>
   )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    flex: 1,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "90%",
    marginRight: 8,
    padding: 8,
    color: "#120438",
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
})