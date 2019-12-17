import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

function WorldCupPlay({ navigation }) {
  const goToStart = () => {
    navigation.navigate("WorldCupStart");
  };
  const goToFinish = () => {
    navigation.navigate("WorldCupFinish");
  };

  return (
    <View style={styles.container}>
      <Text>WorldCupPlay</Text>
      <Button onPress={goToStart} title="시작화면" color="#841584" />
      <Button onPress={goToFinish} title="종료화면" color="#841584" />
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

export default WorldCupPlay;
