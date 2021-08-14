import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import Header from "./components/Header";
import Input from "./components/TextInput";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      todos: [],
      type: "All",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Header />
          <Input />
          <Text>Hello from Fasunle</Text>
          <View />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
