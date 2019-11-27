import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function HelpList({ navigation }) {

  const goToDetail = () => {
    navigation.navigate("HelpDetail");
  };

  return (
    <View style={styles.container}>
      <Text>List</Text>
      <Button onPress={goToDetail} title="상세보기" color="#841584" />
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
