import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { Trash } from "phosphor-react-native";

import { styles } from "./styles";
import { theme } from "@/styles/theme";

type Props = {
    description: string;
    isDone: boolean;
    toggleDone: () => void
    onRemove: (resetIconColor: () => void) => void;
}

export function TaskCard({ description, isDone, toggleDone, onRemove }: Props) {
    const [isPressed, setIsPressed] = useState(false);

    function handleRemovePress() {
        setIsPressed(true); 
        onRemove(() => setIsPressed(false)); 
    }
    return (
        <View style={styles.container}>
            <Checkbox 
            style={styles.checkbox} 
            value={isDone} 
            onValueChange={toggleDone} 
            color={isDone ? theme.COLORS.purple.light : theme.COLORS.blue.light} 
            />
            <Text style={[styles.task, isDone && styles.taskCompleted]} >{description}</Text>

            <TouchableOpacity
               style={[
                styles.icon,
                { 
                    backgroundColor: isPressed ? theme.COLORS.gray[400] : 'transparent',
                }
            ]}
                onPress={handleRemovePress}
                >
                    
                <Trash size={22} color={ isPressed ? theme.COLORS.red.dark: theme.COLORS.gray[300]}  />
            </TouchableOpacity>
        </View>
    )
}