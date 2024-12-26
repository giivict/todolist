import { useState } from 'react';
import { Image, View, TouchableOpacity, Text, FlatList, Alert } from 'react-native';
import { PlusCircle } from 'phosphor-react-native';

import { Info } from '@/components/Info';
import { Input } from '@/components/Input';
import { Loading } from '@/components/Loading';
import { TaskCard } from '@/components/TasksCard';
import { ListIsEmpty } from '@/components/ListIsEmpty';

import { styles } from './styles';
import { theme } from '@/styles/theme';
import { useFonts ,Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';

type Task = {
  id: string;
  description: string;
  isDone: boolean;
}


export default function Home() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })

  function handleTaskAdd(){
    if (taskText.trim() === '') {
      Alert.alert('Erro', 'Você não pode adicionar uma tarefa vazia.');
      return;
    }
  
    if (tasks.some(task => task.description === taskText.trim())) {
      
      Alert.alert('Duplicada', 'Essa tarefa já foi adicionada.');
      return;
    }
    
    const newTask: Task = {
      id: String(new Date().getTime()),
      description: taskText.trim(),
      isDone: false,
    }
    
    setTasks((prevState) => [...prevState, newTask]);
    setTaskText(''); 

  }

  function handleTaskRemove(description: string, resetIconColor: () => void) {
    Alert.alert('Remover', 'Deseja remover esta tarefa?', [
        {
            text: 'Sim',
            onPress: () => {
              resetIconColor();
              setTasks(prevState => prevState.filter(task => task.id !== description));
          },
        }, 
        {
            text: 'Não',
            style: 'cancel',
            onPress: resetIconColor
        }
    ])        
}

  function toggleTaskDone(taskId: string) {
    setTasks((prevState) => {
      const updatedTasks = prevState.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task
      );

      return updatedTasks.sort((a, b) => Number(a.isDone) - Number(b.isDone));
    });
  }

  const createdCount = tasks.length;
  const doneCount = tasks.filter(task => task.isDone).length;


  return (
    <View style={styles.container}>
      <Image source={require('@/assets/Logo.png')} style={styles.logo} />

    { fontsLoaded ? 
      <View style={styles.taskArea}>
        <View style={styles.input}>
          <Input
            placeholder='Adicione uma nova tarefa'
            value={taskText}
            onChangeText={setTaskText}
          />
          <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={handleTaskAdd}>
            <PlusCircle size={16} color={theme.COLORS.gray[100]} />
          </TouchableOpacity>

        </View>

        <Info done={doneCount} created={createdCount} />

        <FlatList 
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskCard
          key={item.id} 
          description={item.description}
          onRemove={(resetIconColor) => handleTaskRemove(item.id, resetIconColor)}
          isDone = {item.isDone}
          toggleDone ={() => toggleTaskDone(item.id)}
          />
        )}
        ListEmptyComponent={() => <ListIsEmpty
        title='Você ainda não tem tarefas cadastradas'
        subtitle='Crie tarefas e organize seus itens a fazer'
        />}
        showsVerticalScrollIndicator={false}
        />

        
      </View> : <Loading />}

    </View>
  )
}