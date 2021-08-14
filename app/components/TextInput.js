import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

const Input = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder="What needs to be done?"
        placeholderTextColor="#cacaca"
        selectionColor="#666666"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputText: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 60,
    backgroundColor: "#ffffff",
  },
  inputContainer: {
    marginRight: 20,
    marginLeft: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
  },
});
export default Input;
