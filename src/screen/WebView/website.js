import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import { Container } from "../../common/container";
import { Header } from "../../components/header";

export default function WebPage({ navigation, route }) {
  const { url } = route.params;
  return (
    <>
      <Container>
        <View style={{ paddingHorizontal: 20 }}>
          <Header
            title="Latest Update on Naruto"
            onPress={() => navigation.pop()}
          />
        </View>
        <WebView source={{ uri: url }} />
      </Container>
    </>
  );
}
