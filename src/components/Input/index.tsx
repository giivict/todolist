import { useState } from "react";
import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";
import { theme } from "@/styles/theme";


export function Input({ ...rest }: TextInputProps) {
    const [isFocused, setIsFocused] = useState(false)


    return (
        <TextInput
            {...rest}
            style={[
                styles.container,
                {
                    borderColor: isFocused ? theme.COLORS.purple.dark : theme.COLORS.gray[700]
                }
            ]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            autoCapitalize='sentences'
            placeholderTextColor={theme.COLORS.gray[300]}
        />
    )

}