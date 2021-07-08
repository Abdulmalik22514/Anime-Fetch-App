// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchPage from "./screen/Search/search";
import Details from "./screen/Details/details";
import WebPage from "./screen/WebView/website";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="search" component={SearchPage} />
        <Stack.Screen name="details" component={Details} />
        <Stack.Screen name="webpage" component={WebPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
