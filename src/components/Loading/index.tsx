import { ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { theme } from "@/styles/theme";

export function Loading(){
    return (
    <ActivityIndicator style={styles.container} color={theme.COLORS.gray[300]} />
    )
}