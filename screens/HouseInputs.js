import React from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, ScrollView, Button, StatusBar, View } from "react-native";
import { addHouse, updateHouse } from "../redux/actions";
import Require from "../components/inputs/Require";
import Includes from "../components/inputs/Includes";
import Options from "../components/inputs/Options";
import Education from "../components/inputs/Education";
import Convenience from "../components/inputs/Convenience";
import Lifestyle from "../components/inputs/Lifestyle";
import Photos from "../components/inputs/Photos";
import Checklist from "../components/inputs/Checklist";

function HouseInputs({ navigation }) {
  const dispatch = useDispatch();
  const isUpdate = navigation.state.params.isUpdate;

  const onAddHouse = () => {
    if (isUpdate) {
      dispatch(updateHouse(navigation.state.params.houseId));
    } else {
      dispatch(addHouse());
    }
    navigation.navigate("HouseList");
  };

  const goToCamera = () => {
    navigation.navigate("HouseCamera");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <StatusBar barStyle="dark-content" />

        <Require title="필수 항목 입력" />

        <Includes title="관리비 포함 내역" />

        <Options title="옵션" />

        <Convenience title="편의 시설" />

        <Education title="교육 시설" />

        <Lifestyle title="주변 환경" />

        <Checklist title="체크리스트" />

        <Photos />
      </ScrollView>
      <View style={styles.bottom}>
        <Button onPress={goToCamera} title="사진찍기" color="#841584" />
        <Button onPress={onAddHouse} title="저장하기" color="#841584" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    width: "100%",
    paddingHorizontal: 15
  },
  scrollView: { flex: 0.9 },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  bottom: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default HouseInputs;
