import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    console.log(enteredText);
    setEnteredGoal(enteredText);
  };

  const [courseGoals, setCourseGoals] = useState([]); //array of strings [

  const addGoalHandler = () => {
    console.log(enteredGoal);
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]); //spread operator
    setEnteredGoal('');
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoal}
          onChangeText={goalInputHandler}
          returnKeyType="done"
          onSubmitEditing={addGoalHandler}
          style={styles.textInput}
          placeholder="Your course goal"
        />
        {/* Button does not have a style prop */}
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    height: '100%', //take up the whole screen height, not just the content height
    flexDirection: 'column', //main axis is vertical
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row', //main axis is horizontal
    justifyContent: 'space-between', //justify along the main axis
    alignItems: 'center', //align along the cross axis
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    marginRight: 10,
    padding: 10,
  },
  goalsContainer: { flex: 5 },
});
