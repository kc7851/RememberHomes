import React from "react";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  View,
  Button,
  StatusBar,
  ScrollView,
  Text
} from "react-native";
import Photos from "../components/detail/Photos";
import Requires from "../components/detail/Requires";
import Checked from "../components/detail/Checked";
import Checklist from "../components/detail/Checklist";
import { goTo } from "../utils/navi";
import { alert } from "../utils/alert";

function WorldCupFinish({ navigation }) {
  const victory = navigation.state.params.victory;
  const {
    requires,
    includes,
    options,
    convenience,
    education,
    lifestyle,
    checklist,
    photos
  } = victory;

  const houses = useSelector(state => state.houses);
  const naviOptions = {
    houses: houses
  };
  const play = () => {
    if (houses.length < 2) {
      alert("최소 2개이상의 집이 필요합니다.");
      return;
    }
    goTo(navigation, "WorldCupPlay", naviOptions);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.componentsContainer}>
          <View style={{ marginTop:40, alignItems: "center" }}>
            <Text style={{ fontSize: 34 }}>우승</Text>
          </View>
          {photos && <Photos houseId={victory.id} />}

          <Requires requires={requires} />

          <Checked title="관리비 포함 항목" checked={includes} />

          <Checked title="옵션 포함 항목" checked={options} />

          <Checked title="편의 시설" checked={convenience} />

          <Checked title="교육 시설" checked={education} />

          <Checked title="주변 환경" checked={lifestyle} />

          <Checklist title="체크리스트" checklist={checklist} />
        </View>
      </ScrollView>
      <Button onPress={play} title="다시하기" color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%"
  },
  scrollView: { flex: 0.9 },
  componentsContainer: {
    paddingHorizontal: 25
  },
  bottom: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default WorldCupFinish;
