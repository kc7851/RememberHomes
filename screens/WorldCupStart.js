import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

function WorldCupStart({ navigation }) {
  const goToPlay = () => {
    //TODO: 최소 2개이상일 때 가능하도록 확인하는 로직 필요.
    //TODO: store.houses를 넘겨 줄 예정.
    navigation.navigate("WorldCupPlay");
  };

  return (
    <View style={styles.container}>
      <Text>WorldCupStart</Text>
      <Button onPress={goToPlay} title="게임 시작하기" color="#841584" />
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
