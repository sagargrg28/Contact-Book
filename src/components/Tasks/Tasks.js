import { View, ScrollView } from "react-native";
import Task from "./Task/Task";
import styles from "./styles";
import { useSelector } from "react-redux";


export default function Tasks(props) {
  const tasks= useSelector ((state) => state.task.tasks); 

  return (
    <View style={styles.container}>
      <ScrollView>

      

        {tasks.map(
          (task, index) => (
            <Task key={index} task={task}  />
          )
        )}
      </ScrollView>
    </View>
  );
}
