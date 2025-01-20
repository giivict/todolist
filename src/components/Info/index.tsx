import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  created: number;
  done: number;
};

export function Info({ created, done }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.created}>Criadas</Text>
        <Text style={styles.number}>{created}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.done}>Concluídas</Text>
        <Text style={styles.number}>{done}</Text>
      </View>
    </View>
  );
}
