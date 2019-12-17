import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

function WorldCupStart({ navigation }) {
  const goToPlay = () => {
    navigation.navigate("WorldCupPlay");
  };
  const goToFinish = () => {
    navigation.navigate("WorldCupFinish");
  };

  return (
    <View style={styles.container}>
      <Text>WorldCupStart</Text>
      <Button onPress={goToPlay} title="게임화면" color="#841584" />
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

export default WorldCupStart;
