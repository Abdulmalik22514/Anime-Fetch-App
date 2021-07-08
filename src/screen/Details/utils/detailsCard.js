import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import * as Colors from "../../../common/colors";

export const DetailsCard = ({ title, episodes, image_url, onPress, url }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image
          source={{ uri: image_url }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.episode}>{episodes}</Text>
        </View>
      </TouchableOpacity>
      <Text>{url}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 10,
    backgroundColor: Colors.White,
    marginBottom: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    width: 250,
  },
  episode: {
    fontWeight: "300",
    fontSize: 18,
  },
  image: {
    width: 70,
    height: 100,
    marginRight: 20,
  },
});
