import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import { Container } from "../../common/container";
import { DetailsCard } from "./utils/detailsCard";
import * as Colors from "../../common/colors";
import { Header } from "../../components/header";

export default function Details({ navigation, route }) {
  const { data } = route.params;
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch(`https://api.jikan.moe/v3/search/anime?q=${data}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        setAnime(res.results);
      })
      .catch((error) => error)
      .finally(() => setLoading(false));
  };

  const _renderItem = ({ item }) => {
    const { title, episodes, image_url, url } = item;
    return (
      <DetailsCard
        title={title}
        episodes={episodes}
        image_url={image_url}
        onPress={() => navigation.navigate("webpage", { url })}
      />
    );
  };

  return (
    <>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator color={"skyblue"} size="large" />
          <Text style={{ alignSelf: "center", marginTop: 10, fontSize: 30 }}>
            Loading...
          </Text>
        </View>
      ) : (
        <Container
          backgroundColor={Colors.DeliveryColour}
          barColor={Colors.DeliveryColour}
        >
          <View style={styles.container}>
            <Header
              title={data}
              onPress={() => {
                setLoading(true) && <ActivityIndicator />;
                navigation.pop();
              }}
            />
            <FlatList
              data={anime}
              renderItem={_renderItem}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.title}
            />
          </View>
        </Container>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
});
