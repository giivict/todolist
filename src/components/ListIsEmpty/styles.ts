import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 56,
    width: 56,
    marginBottom: 16,
  },
  title: {
    textAlign: "center",
    color: theme.COLORS.gray[300],
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.MD,
  },
  subtitle: {
    textAlign: "center",
    color: theme.COLORS.gray[300],
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.MD,
  },
  horizontalLine: {
    width: "92%",
    marginTop: 20,
    marginBottom: 48,
    height: 1,
    backgroundColor: theme.COLORS.gray[300],
  },
});
