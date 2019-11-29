import React from "react";
import { StyleSheet, View, Text, Button, StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setInputs } from "../redux/actions";

function HouseDetatil({ navigation }) {
  const dispatch = useDispatch();
  const houseId = navigation.state.params.houseId;
  const house = useSelector(state => state.houses).find(
    house => house.id == houseId
  );

  const onUpdate = () => {
    dispatch(setInputs(house));
    navigation.navigate("HouseInputs", {
      isUpdate: true,
      houseId: houseId,
      title: "집 정보 수정"
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text>위치: {house.location}</Text>
      </View>
      <View>
        <Text>층수: {house.floor}층</Text>
      </View>
      <View>
        <Text>보증금: {house.deposit}만원</Text>
      </View>
      <View>
        <Text>월세: {house.monthlyFee}만원</Text>
      </View>
      <View>
        <Text>관리비: {house.maintenenceFee}만원</Text>
      </View>
      <Button onPress={onUpdate} title="수정하기" color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HouseDetatil;
