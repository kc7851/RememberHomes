import React from "react";
import { StyleSheet, View } from "react-native";

import HouseInputs from './HouseInputs';
import HouseList from "./HouseList";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <HouseInputs />
      <HouseList />
    </View>
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

export default HomeScreen;
