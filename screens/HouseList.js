import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  FlatList,
  TouchableOpacity,
  Button
} from "react-native";
import { removeHouse } from "../actions";

function HouseList() {
  const houses = useSelector(state => state.houses);
  const dispatch = useDispatch();
  const onPressItem = id => {
    console.log("item.id", id, "detail page로 넘어갈 예정");
  };
  const onDeleteItem = id => {
    dispatch(removeHouse(id));
  };
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={houses}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => onPressItem(item.id)}>
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>
                  위치:{item.location} / 층수: {item.floor}
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
    </ScrollView>
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
