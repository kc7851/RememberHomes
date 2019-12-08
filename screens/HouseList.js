import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initialState } from '../redux/initialState';
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
import { removeHouse, fetchHouses, setInputs, saveHouses } from "../redux/actions";

function HouseList({ navigation }) {
  const houses = useSelector(state => state.houses);
  const dispatch = useDispatch();
  const onGoToDetail = id => {
    navigation.navigate("HouseDetail", { houseId: id });
  };
  const onCreate = () => {
    dispatch(setInputs(initialState.inputs));
    navigation.navigate("HouseInputs", {
      isUpdate: false,
      title: "새 집 입력"
    });
  };
  const onDeleteItem = id => {
    dispatch(removeHouse(id));
  };
  useEffect(() => {
    dispatch(fetchHouses());
  }, []);
  useEffect(() => {
    dispatch(saveHouses(houses));
  }, [houses]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <FlatList
          data={houses}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity onPress={() => onGoToDetail(item.id)}>
                <View style={styles.listItemCont}>
                  <Text style={styles.listItem}>
                    위치:{item.location} / 층수: {item.floor}층
                  </Text>
                </View>
                <View style={styles.listItemCont}>
                  <Text style={styles.listItem}>
                    보증금: {item.deposit} / 월세: {item.monthlyFee} / 관리비:{" "}
                    {item.maintenenceFee}
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
