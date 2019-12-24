import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import { alert } from "../utils/alert";
import { goTo } from "../utils/navi";

function WorldCupPlay({ navigation }) {
  const initList = navigation.state.params.houses;

  const initialState = {
    survive: initList,
    victory: [],
    now: [initList[0], initList[1]],
    round: 1,
    selected: null,
    firstColor: "white",
    secondColor: "white"
  };

  const [state, setState] = useState(initialState);
  const {
    survive,
    victory,
    now,
    round,
    selected,
    firstColor,
    secondColor
  } = state;

  const select = (house, selectedNumber) => {
    setState({
      ...state,
      selected: house,
      firstColor: selectedNumber === 1 ? "red" : "white",
      secondColor: selectedNumber === 1 ? "white" : "red"
    });
  };

  const next = () => {
    if (!selected) {
      alert("하나 이상을 선택해야 합니다.");
      return;
    }

    if (survive.length === 2) {
      const options = {
        victory: selected
      };
      goTo(navigation, "WorldCupFinish", options);
      return;
    }

    Math.floor(survive.length / 2) == round ? nextStage() : nextRound();
  };

  const nextStage = () => {
    const newSurvive =
      survive.length % 2 === 0
        ? [...victory, selected]
        : [...victory, selected, survive[survive.length - 1]];
    setState({
      survive: newSurvive,
      victory: [],
      now: [newSurvive[0], newSurvive[1]],
      round: 1,
      selected: null,
      firstColor: "white",
      secondColor: "white"
    });
  };

  const nextRound = () => {
    setState({
      ...state,
      victory: [...victory, selected],
      now: [survive[round * 2], survive[round * 2 + 1]],
      round: round + 1,
      selected: null,
      firstColor: "white",
      secondColor: "white"
    });
  };

  const stage =
    survive.length === 2
      ? "결승전"
      : survive.length + "강전 - " + round + "라운드";

  const candidateContainer = borderColor => {
    return {
      flex: 0.4,
      flexDirection: "row",
      width: "90%",
      backgroundColor: "#eee",
      borderColor,
      borderWidth: 5
    };
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, paddingVertical: 10 }}>{stage}</Text>
      <TouchableOpacity
        onPress={() => select(now[0], 1)}
        style={candidateContainer(firstColor)}
      >
        <Image style={styles.photo} source={{ url: now[0].photos[0] }} />
        <View style={{ flexDirection: "column", padding: 10 }}>
          <Text style={{ marginVertical: 3 }}>
            위치: {now[0].requires.location}
          </Text>
          <Text style={{ marginVertical: 3 }}>
            보증금: {now[0].requires.deposit} 만원
          </Text>
          <Text style={{ marginVertical: 3 }}>
            월세: {now[0].requires.monthlyFee} 만원
          </Text>
          <Text style={{ marginVertical: 3 }}>
            관리비: {now[0].requires.maintenenceFee} 만원
          </Text>
          <Text style={{ marginVertical: 3 }}>
            {now[0].requires.housetype} / {now[0].requires.floor}층 /{" "}
            {now[0].requires.area}평
          </Text>
          <Text style={{ marginVertical: 3 }}>
            {now[0].requires.direction} / {now[0].requires.housestructure}
          </Text>
          <Text style={{ marginVertical: 3 }}>
            버스: {now[0].requires.bus}분 / 지하철: {now[0].requires.subway}분
          </Text>
          <Text style={{ marginVertical: 3 }}>
            출퇴근시간: {now[0].requires.workdistance}분
          </Text>
        </View>
      </TouchableOpacity>
      <Text>VS</Text>
      <TouchableOpacity
        onPress={() => select(now[1], 2)}
        style={candidateContainer(secondColor)}
      >
        <Image style={styles.photo} source={{ url: now[1].photos[0] }} />
        <View style={{ flexDirection: "column", padding: 10 }}>
          <Text style={{ marginVertical: 3 }}>
            위치: {now[1].requires.location}
          </Text>
          <Text style={{ marginVertical: 3 }}>
            보증금: {now[1].requires.deposit} 만원
          </Text>
          <Text style={{ marginVertical: 3 }}>
            월세: {now[1].requires.monthlyFee} 만원
          </Text>
          <Text style={{ marginVertical: 3 }}>
            관리비: {now[1].requires.maintenenceFee} 만원
          </Text>
          <Text style={{ marginVertical: 3 }}>
            {now[1].requires.housetype} / {now[1].requires.floor}층 /{" "}
            {now[1].requires.area}평
          </Text>
          <Text style={{ marginVertical: 3 }}>
            {now[1].requires.direction} / {now[1].requires.housestructure}
          </Text>
          <Text style={{ marginVertical: 3 }}>
            버스: {now[1].requires.bus}분 / 지하철: {now[1].requires.subway}분
          </Text>
          <Text style={{ marginVertical: 3 }}>
            출퇴근시간: {now[1].requires.workdistance}분
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{ marginTop: 20 }}>
        <Button onPress={next} title="선택" color="#841584" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  selectView: {
    flex: 0.4,
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#eee",
    borderColor: "white",
    borderWidth: 5
  },
  photo: {
    flex: 1,
    height: "100%",
    resizeMode: "cover"
  }
});

export default WorldCupPlay;
