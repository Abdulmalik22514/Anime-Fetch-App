import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import * as Colors from "../common/colors";
export const Input = ({ onChange, value, style, placeholder }) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        value={value}
        style={styles.input}
        onChangeText={onChange}
        placeholderTextColor={Colors.Grey}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    padding: 10,
    alignItems: "center",
    fontSize: 18,
    fontWeight: "400",
    borderWidth: 1,
    borderColor: Colors.Purple,
    borderRadius: 8,
    marginBottom: 50,
  },
});
