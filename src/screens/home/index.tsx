import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { FlatListItem } from "../../components/flatListItem";

export type Task = {
    text: string;
    finish: boolean;
}

export function Home(){
    const [tasks, setTasks] = useState<Task[]>([])
    const [textInput, setTextInput] = useState("")

    const handleAddNewTask = () => {
        if (!textInput){
            return Alert.alert("Texto em branco", "Não é possível adicionar uma tarefa sem nome")
        }
        const verifyTask = tasks.some(task => task.text.toLocaleLowerCase() === textInput.toLowerCase())
        if(!verifyTask){
            setTasks((oldTasks) => [...oldTasks, {text: textInput, finish: false}])
            setTextInput("")
        }else {
            return Alert.alert("Tarefa Repetida", "Já existe uma tarefa com este nome na lista")
        }
    }

    const tasksCreateTasks = tasks.reduce((acc, task) => acc += 1, 0)
    const taskChecked = tasks.reduce((acc, task) => acc += task.finish ? 1 : 0, 0)


    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require("../../../assets/rocket.png")}/>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput} 
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#6B6B6B"
                        onChangeText={setTextInput}
                        value={textInput}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
                        <Image source={require("../../../assets/plus.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.tasksContainer}>
                    <View style={styles.taskView}>
                        <Text style={styles.firstTaskText}>Criadas</Text>
                        <Text style={styles.countText}>{tasksCreateTasks}</Text>
                    </View>
                    <View style={styles.taskView}>
                        <Text style={styles.secondTaskText}>Concluídas</Text>
                        <Text style={styles.countText}>{taskChecked}</Text>
                    </View>
                </View>
                <FlatList
                    data={tasks}
                    keyExtractor={item => item.text}
                    renderItem={({item}) => <FlatListItem item={item} setTasks={setTasks}/>}
                    ListEmptyComponent={() => (
                        <View style={styles.flatListEmpty}>
                            <Image source={require("../../../assets/clipboard.png")}/>
                            <Text style={styles.flatListFirstText}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.flatListSecondText}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}