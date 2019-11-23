import React from "react";
import { Provider } from 'react-redux'
import { StyleSheet, View } from "react-native";

import HomeScreen from "./screens/HomeScreen";

import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <HomeScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
