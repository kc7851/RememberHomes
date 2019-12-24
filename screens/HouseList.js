import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initialState } from "../redux/initialState";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  FlatList,
  TouchableOpacity,
  Button,
  StatusBar
} from "react-native";
import {
  removeHouse,
  fetchHouses,
  setInputs,
  saveHouses
} from "../redux/actions";
import { goTo } from "../utils/navi";
import { cleaner } from "../utils/fileSystem";

function HouseList({ navigation }) {
  const houses = useSelector(state => state.houses);
  const dispatch = useDispatch();

  const onCreate = () => {
    dispatch(setInputs(initialState.inputs));
    const options = {
      isUpdate: false,
      title: "새 집 입력"
    };
    goTo(navigation, "HouseInputs", options);
  };

  const onDeleteItem = id => {
    dispatch(removeHouse(id));
  };

  useEffect(() => {
    dispatch(fetchHouses());
  }, []);
  //TODO: 데모데이 이후에 다시 주석 풀어야 함.
  // useEffect(() => {
  //   dispatch(saveHouses(houses));
  // }, [houses]);
  useEffect(() => {
    const savedList = houses.reduce((acc, cur) => acc.concat(cur.photos), []);
    cleaner(savedList);
  }, [houses]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <FlatList
          data={houses}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() =>
                  goTo(navigation, "HouseDetail", { houseId: item.id })
                }
              >
                <View style={styles.listItemCont}>
                  <Text style={styles.listItem}>
                    위치:{item.requires.location} / 층수: {item.requires.floor}
                    층
                  </Text>
                </View>
                <View style={styles.listItemCont}>
                  <Text style={styles.listItem}>
                    보증금: {item.requires.deposit} / 월세:{" "}
                    {item.requires.monthlyFee} / 관리비:{" "}
                    {item.requires.maintenenceFee}
                  </Text>
                  <Button title="X" onPress={() => onDeleteItem(item.id)} />
                </View>
              </TouchableOpacity>
              <View style={styles.hr} />
            </View>
          )}
        />
        <Button onPress={onCreate} title="새로 만들기" color="#841584" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    paddingTop: 20
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
  hr: {
    height: 1,
    backgroundColor: "gray"
  }
});

export default HouseList;
