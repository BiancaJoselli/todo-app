import { useState } from "react";
import { ScrollView, Pressable, StyleSheet, Text, View } from "react-native";



export default function Index() { 
  const [ tasks, setTasks] = useState ([
    {id: 1, title: "Estudar React", done: false },
    {id: 2, title: "Estudar React Native", done: false },
    {id: 3, title: "Estudar TypeScript", done: false },
  ])

  const updateTask = (id: number) => {
    const task = tasks.find(task => task.id == id)
    if (task) {
      task.done = !task.done
      setTasks([...tasks])
    } }
  return (
    <View style={styles.container}>
      <View style={styles.tasks}>
        <Text style={styles.title}>Minhas tarefas em React:</Text>
        <ScrollView style={styles.tasksList}>
        {tasks.map (tasks => (
          <Text style={styles.taskItem} 
          onPress={() => updateTask (tasks.id)}>
            {tasks.done ? '✅' : '❌'}
          {tasks.title}
          
          </Text>
        ))
        }
        </ScrollView>

      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Alternar</Text>
      </Pressable>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
  },
  title: {
    justifyContent: "center",
    fontSize: 30,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: "blue",
    padding: 20,
    justifyContent: "center",
    marginBottom: 20,
    borderRadius: 10,

  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  tasks: {
    flex: 1,
    width: "100%",
  },

  tasksList: {
    flex: 1,
    padding: 20,
  },

  taskItem: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    marginVertical:  5,
    fontSize: 16,
    borderRadius: 5,
  },
});

