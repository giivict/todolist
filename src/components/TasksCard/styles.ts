import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        height: 74,
        marginTop: 17,
        marginLeft: 24,
        marginRight: 24,
        padding: 10,
        gap: 8,
        paddingRight: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.COLORS.gray[500],
        borderColor: theme.COLORS.gray[400],
        borderWidth: 1,
        borderRadius: 8,
        
    },

   checkbox: {
        margin: 3,
        borderRadius: 10,
            
    },

    task: {
       flex: 1,
       textAlign: 'left', 
       color: theme.COLORS.gray[100],
       fontFamily: theme.FONT_FAMILY.REGULAR,
       fontSize: theme.FONT_SIZE.MD

    },
    taskCompleted: {
        textDecorationLine: 'line-through',
        color: theme.COLORS.gray[300],

    },

    icon: {
        marginRight: 10,
    }
})