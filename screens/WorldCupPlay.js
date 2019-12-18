import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  Alert
} from "react-native";

const alert = () => {
  Alert.alert("하나를 선택해야 합니다.");
};

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
    selected: null
  };

  const [state, setState] = useState(initialState);

  const selected = selectedNumber => {
    setState({ ...state, selected: selectedNumber });
  };

  const nextRound = () => {
    const survive = state.survive;
    const victory = state.victory;
    const round = state.round;
    const selected = state.selected;

    if (!selected) {
      alert();
      return;
    }

    if (survive.length === 2) {
      goToFinish(selected);
    }
    const isNextStage = Math.floor(survive.length / 2) == round;

    if (isNextStage) {
      const newSurvive =
        survive.length % 2 === 0
          ? [...victory, selected]
          : [...victory, selected, survive[survive.length - 1]];
      setState({
        survive: newSurvive,
        victory: [],
        now: [newSurvive[0], newSurvive[1]],
        round: 1,
        selected: null
      });
    } else {
      setState({
        ...state,
        victory: [...victory, selected],
        now: [survive[round * 2], survive[round * 2 + 1]],
        round: round + 1,
        selected: null
      });
    }
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

  return (
    <View style={styles.container}>
      <Text>WorldCupPlay</Text>
      <Text>{stage}</Text>
      <TouchableOpacity
        onPress={() => selected(state.now[0])}
        style={styles.selectView}
      >
        <Text>{state.now[0].houses}</Text>
      </TouchableOpacity>
      <Text>VS</Text>
      <TouchableOpacity
        onPress={() => selected(state.now[1])}
        style={styles.selectView}
      >
        <Text>{state.now[1].houses}</Text>
      </TouchableOpacity>

      <Button onPress={nextRound} title="선택" color="#841584" />
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
    width: "100%",
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default WorldCupPlay;
