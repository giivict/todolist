import { View, Text, Image } from "react-native";
import { styles } from "./styles";

type Props = {
    title: string;
    subtitle: string;
}

export function ListIsEmpty({title, subtitle}: Props) {
    return (
        <View style={styles.container}>
             <View style={styles.horizontalLine} />
            <Image source={require('@/assets/Clipboard.png')} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}