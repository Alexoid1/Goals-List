import { 
  StyleSheet, 
  View, 
  TextInput, 
  Button,
  Modal,
  Image
} from 'react-native';
import { useState } from 'react';

function GoalInput({onAddGoal, visible, onCancel}){

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
        <Image style={styles.image} source={require('../assets/images/favpng_goal-setting-theory-management-business-organization.png')}/>
        <TextInput 
          style={styles.textInput} 
          placeholder='Your Goal!' 
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title='Add Goal'
              onPress={addGoalHandler}
              color='#b180f0'
            />
          </View>
          <View style={styles.button}>
            <Button
              title='Cancel'
              onPress={onCancel}
              color='#f31282'
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
      padding: 16,
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
      backgroundColor: '#192580'
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#6472de',
      backgroundColor: '#e4d0ff',
      width: '70%',
      marginRight: 8,
      padding: 8
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 16
    },
    button:{
      width: 100,
      marginHorizontal: 8
    },
    image: {
      width: 100,
      height: 100,
      margin: 20
    }
})