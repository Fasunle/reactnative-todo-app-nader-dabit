import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: { marginTop: 80 },
  headerText: {
    fontSize: 70,
    textAlign: "center",
    color: "rgba(175, 47, 47, 0.25)",
    fontWeight: "600",
  },
});

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Todo App 🧑</Text>
    </View>
  );
};

export default Header;
