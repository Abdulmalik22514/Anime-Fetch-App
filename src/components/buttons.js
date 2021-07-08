import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import * as Colors from "../common/colors";

export const Button = ({
  title,
  titleColor,
  isSmall,
  style,
  hasBorder,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.account,
        isSmall && styles.smallButton,
        hasBorder && styles.borderButton,
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.acct, { color: titleColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  borderButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "white",
  },
  smallButton: {
    width: 133,
  },
  titleColor: {
    color: Colors.Purple,
  },
  acct: {
    fontWeight: "700",
    color: "white",
    fontSize: 19,
    // fontFamily: "roboto",
  },
  account: {
    backgroundColor: Colors.Purple,
    height: 65,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    width: "100%",
    alignSelf: "center",
  },
});
