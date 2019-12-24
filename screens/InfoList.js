import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import InfoFlatList from "../components/infomations/InfoFlatList";

function InfoList({ navigation }) {
  const infomations = useSelector(state => state.infomations);
  const { 공통, 매매, 전세, 월세 } = infomations;

  return (
    <View style={styles.container}>
      <ScrollView>
        <InfoFlatList title="공통사항" array={공통} navigation={navigation} />

        <InfoFlatList title="매매" array={매매} navigation={navigation} />

        <InfoFlatList title="전세" array={전세} navigation={navigation} />

        <InfoFlatList title="월세" array={월세} navigation={navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default InfoList;
