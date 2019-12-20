import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { goTo } from "../utils/navi";

function WorldCupFinish({ navigation }) {
  const victory = navigation.state.params.victory;
  const options = {
    houses: "TODO store.houses"
  };

  return (
    <View style={styles.container}>
      <Text>WorldCupFinish</Text>
      <Text>{victory.houses}</Text>
      <Button onPress={() => goTo(navigation, "WorldCupPlay", options)} title="다시하기" color="#841584" />
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

export default WorldCupFinish;
