import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

function HelpDetail({ navigation }) {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>HelpDetail</Text>
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

export default HelpDetail;
