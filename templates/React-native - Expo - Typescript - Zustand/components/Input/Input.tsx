import React, { ReactNode } from "react";
import {
  TextInput,
  View,
  ViewStyle,
  TextInputProps,
  StyleSheet,
} from "react-native";

type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: ViewStyle;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  secure?: boolean;
} & TextInputProps;

const Input = ({
  value,
  onChangeText,
  placeholder = "Enter text",
  style,
  secure,
  ...props
}: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        secureTextEntry={secure}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999999"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
});
export default Input;
