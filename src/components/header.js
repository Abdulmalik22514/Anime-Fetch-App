import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Back } from "../../assets/svg";

export const Header = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Back />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginLeft: 30,
  },
});
