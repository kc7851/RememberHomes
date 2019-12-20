import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { goTo } from "../utils/navi";

function WorldCupStart({ navigation }) {
  const options = {
    houses: "TODO store.houses"
  };

  return (
    <View style={styles.container}>
      <Text>WorldCupStart</Text>
      <Button onPress={() => goTo(navigation, "WorldCupPlay", options)} title="게임 시작하기" color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default WorldCupStart;
