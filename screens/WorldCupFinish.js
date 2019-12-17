import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

function WorldCupFinish({ navigation }) {
  const goToStart = () => {
    navigation.navigate("WorldCupStart");
  };
  const goToPlay = () => {
    navigation.navigate("WorldCupPlay");
  };

  return (
    <View style={styles.container}>
      <Text>WorldCupFinish</Text>
      <Button onPress={goToStart} title="시작화면" color="#841584" />
      <Button onPress={goToPlay} title="게임화면" color="#841584" />
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
