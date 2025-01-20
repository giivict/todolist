import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.gray[700],
  },
  logo: {
    marginTop: 70,
    marginBottom: 70,
    alignSelf: "center",
  },
  input: {
    flex: 1,
    top: -25,
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  button: {
    padding: 18,
    borderRadius: 4,
    backgroundColor: theme.COLORS.blue.dark,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 55,
    paddingLeft: 24,
    paddingRight: 24,
  },
  taskArea: {
    flex: 1,
    backgroundColor: theme.COLORS.gray[600],
  },
});
