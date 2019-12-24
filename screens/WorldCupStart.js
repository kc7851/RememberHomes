import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, Button, Text } from "react-native";
import { goTo } from "../utils/navi";
import { alert } from "../utils/alert";

function WorldCupStart({ navigation }) {
  const houses = useSelector(state => state.houses);

  const options = {
    houses: houses
  };

  const play = () => {
    if ( houses.length < 2 ) {
      alert("최소 2개이상의 집이 필요합니다.");
      return;
    }
    goTo(navigation, "WorldCupPlay", options)
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>하우스 월드컵</Text>
      <Button onPress={play} title="Start" color="#841584" />
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
