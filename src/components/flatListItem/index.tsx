import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import { Task } from "../../screens/home";
import { styles } from "./styles";
import { Dispatch, SetStateAction } from "react";

interface FlatListItemProps{
    item: Task;
    setTasks: Dispatch<SetStateAction<Task[]>>;
}

export function FlatListItem({item, setTasks} : FlatListItemProps){

    const checkImage = item.finish ? require("../../../assets/check_full.png") : require("../../../assets/check_empty.png")

    const handleRemoveTask = () => {
        Alert.alert("Remover", `Tem certeza que deseja remover a tarefa "${item.text}"`, [
            {text: "Sim", onPress: () => setTasks((tasks) => tasks.filter((task) => task.text !== item.text))},
            {text: "Não", style: "cancel"}
        ])
    }

    const handleCheckOrUncheckTask = () => {
        setTasks((tasks) => {
            const newTasks = tasks.map((task) => {
                if (task.text === item.text){
                    return {...task, finish: !task.finish}
                }
                return task
            })
            return newTasks
        })
    }


    return (
        <View style={styles.generalContainer}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleCheckOrUncheckTask}>
                    <Image style={styles.checkContainer} source={checkImage}/>
                </TouchableOpacity>
                <Text style={item.finish ? styles.textCheckStyle :styles.textStyle}>{item.text}</Text>
                <TouchableOpacity onPress={handleRemoveTask}>
                    <Image style={styles.trashContainer} source={require("../../../assets/trash.png")}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}