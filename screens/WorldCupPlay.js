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

function WorldCupPlay({ navigation }) {
  // const initList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  //TODO: navigation parameter로 넘겨온 list로 변경 예정
  const initList = [
    { houses: 1 },
    { houses: 2 },
    { houses: 3 },
    { houses: 4 },
    { houses: 5 },
    { houses: 6 },
    { houses: 7 },
    { houses: 8 }
  ];

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

  const select = (house, selectedNumber) => {
    setState({
      ...state,
      selected: house,
      firstColor: selectedNumber === 1 ? "red" : "white",
      secondColor: selectedNumber === 1 ? "white" : "red"
    });
  };

  const next = () => {
    if (!state.selected) {
      alert("하나 이상을 선택해야 합니다.");
      return;
    }

    if (state.survive.length === 2) {
      goToFinish(state.selected);
      return;
    }

    Math.floor(state.survive.length / 2) == state.round ? nextStage() : nextRound();
  };

  const nextStage = () => {
    const survive = state.survive;
    const victory = state.victory;
    const selected = state.selected;
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
    const survive = state.survive;
    const victory = state.victory;
    const selected = state.selected;
    const round = state.round;
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

  const goToFinish = selected => {
    navigation.navigate("WorldCupFinish", {
      victory: selected
    });
  };

  const stage =
    state.survive.length === 2
      ? "결승전"
      : state.survive.length + "강 - " + state.round + "라운드";

  const candidateContainer = (number) => {
    return {
      flex: 0.4,
      flexDirection: "row",
      width: "90%",
      backgroundColor: "#eee",
      borderColor: number === 1 ? state.firstColor : state.secondColor,
      borderWidth: 5
    };
  };

  return (
    <View style={styles.container}>
      <Text>WorldCupPlay</Text>
      <Text>{stage}</Text>
      <TouchableOpacity
        onPress={() => select(state.now[0], 1)}
        style={candidateContainer(1)}
      >
        <Image
          style={styles.photo}
          source={require("../assets/house/house1.jpg")}
        />
        <Text style={styles.detail}>{state.now[0].houses}</Text>
      </TouchableOpacity>
      <Text>VS</Text>
      <TouchableOpacity
        onPress={() => select(state.now[1], 2)}
        style={candidateContainer(2)}
      >
        <Image
          style={styles.photo}
          source={{ url: "https://source.unsplash.com/600x600/?house-indoor" }}
        />
        <Text style={styles.detail}>{state.now[1].houses}</Text>
      </TouchableOpacity>

      <Button onPress={next} title="선택" color="#841584" />
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

    // justifyContent: "center",
    // alignItems: "center"
  },
  photo: {
    flex: 0.7,
    height: "100%",
    resizeMode: "cover"
  },
  detail: {
    padding: 10
  }
});

export default WorldCupPlay;
