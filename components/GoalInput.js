import { 
  StyleSheet, 
  View, 
  TextInput, 
  Button,
  Modal
} from 'react-native';
import { useState } from 'react';

function GoalInput({onAddGoal, visible}){

  const [goalText,setGoalText] = useState('')

  function goalInputHandler(text){
    setGoalText(text)
  }
  function addGoalHandler(){
    onAddGoal(goalText)
    setGoalText('')
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Your Goal!' 
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View>
            <Button 
              title='Add Goal'
              onPress={addGoalHandler}
            />
          </View>
          <View>
            <Button
              title='Cancel'
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}  

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
      },
    textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      width: '70%',
      marginRight: 8,
      padding: 8
    },
    buttonContainer: {
      flexDirection: 'row',

    }
})