import { useState } from 'react';
import { 
  StyleSheet,  
  View,  
  FlatList,
  Button
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {

  const [goals, setGoals] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  function addGoalHandler(goalText){
    setGoals((currentCurseGoals) => [
      ...currentCurseGoals, 
      {
        text: goalText,
        id: Math.random().toString()
      }
    ])
  };

  function deleteGoalHandler(id){
    setGoals((currentCurseGoals)=> {
      return currentCurseGoals.filter((item) =>{
        return item.id !== id
      })
    })
  };

  function startAddGoalHandler (){
    setModalVisible(true)
  }
  return (
    <View style={styles.appContainer}>
      <Button 
      title="Add New Goal" 
      color="#5e0acc"
      onPress={startAddGoalHandler}/>
      <GoalInput onAddGoal={addGoalHandler} visible={modalVisible}/>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={goals} 
          renderItem={(itemData) => {
            return (
              <GoalItem 
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            )
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  
  goalsContainer: {
    flex: 5
  },
  

});
