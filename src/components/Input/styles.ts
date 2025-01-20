import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 54,
    width: "75%",
    gap: 8,
    textAlign: "left",
    padding: 16,
    paddingRight: 63,
    backgroundColor: theme.COLORS.gray[500],
    borderRadius: 6,
    color: theme.COLORS.gray[100],
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.LG,
    borderWidth: 1,
  },
});
