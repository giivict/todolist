import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 55,
        paddingLeft: 15,
        paddingRight: 15,
    },
    info: {
        flexDirection: 'row',
        gap: 8,

    },
    number: {
        height: 20,
        width: 25,
        padding: 8,
        paddingVertical: 2,
        gap: 10,
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: theme.COLORS.gray[400],
        color: theme.COLORS.gray[200],
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: theme.FONT_SIZE.SM,

    },
    created: {
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: theme.FONT_SIZE.MD,
        color: theme.COLORS.blue.light,
    },
    done: {
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: theme.FONT_SIZE.MD,
        color: theme.COLORS.purple.light,
    },
})