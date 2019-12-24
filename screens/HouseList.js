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
      <ScrollView style={styles.scrollView}>
        <View style={styles.componentsContainer}>
          <FlatList
            data={houses}
            renderItem={({ item }) => (
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <TouchableOpacity
                    style={{ flex: 0.95 }}
                    onPress={() =>
                      goTo(navigation, "HouseDetail", { houseId: item.id })
                    }
                  >
                    <Text style={styles.listItem}>
                      위치:{item.requires.location} / 층수:{" "}
                      {item.requires.floor}층
                    </Text>
                    <Text style={styles.listItem}>
                      보증금: {item.requires.deposit} / 월세:{" "}
                      {item.requires.monthlyFee} / 관리비:{" "}
                      {item.requires.maintenenceFee}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flex: 0.05
                    }}
                    onPress={() => onDeleteItem(item.id)}
                  >
                    <Text style={{ fontSize: 24, color: "gray" }}>X</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.hr}></View>
              </View>
            )}
          />
        </View>
      </ScrollView>
      <Button onPress={onCreate} title="새로 만들기" color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  scrollView: { flex: 0.7 },
  componentsContainer: {
    paddingHorizontal: 15
  },
  listItem: {
    paddingVertical: 5,
    fontSize: 18,
    overflow: "hidden"
  },
  hr: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: 3
  }
});

export default HouseList;
