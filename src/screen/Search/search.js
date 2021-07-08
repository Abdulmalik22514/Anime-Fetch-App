import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Container } from "../../common/container";
import { Input } from "../../components/inputs";
import * as Colors from "../../common/colors";
import { Button } from "../../components/buttons";

export default function SearchPage({ navigation }) {
  const [data, setData] = useState("");

  const handleButton = () => {
    if (!data) {
      return Alert.alert("Error", "Enter a value");
    }

    return navigation.navigate("details", { data });
  };

  return (
    <>
      <Container>
        <View style={styles.container}>
          <Text style={styles.searchText}>
            Search for the latest information about your favourite anime.
          </Text>
          <Input
            placeholder="input title here"
            value={data}
            onChange={setData}
          />

          <View style={{ paddingHorizontal: 50 }}>
            <Button
              title="Search"
              titleColor={Colors.White}
              onPress={handleButton}
            />
          </View>
        </View>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  searchText: {
    fontWeight: "400",
    fontSize: 20,
    marginBottom: 50,
    letterSpacing: 0.2,
  },
});
