import React from "react";
import { StyleSheet, View, Text, Button, StatusBar } from "react-native";
import { goTo } from "../utils/navi";

function HelpList({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>List</Text>
      <Button onPress={() => goTo(navigation, "HelpDetail")} title="상세보기" color="#841584" />
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

export default HelpList;
