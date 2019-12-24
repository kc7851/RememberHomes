import React from "react";
import { StyleSheet, View, Button, StatusBar, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setInputs } from "../redux/actions";
import Photos from "../components/detail/Photos";
import Requires from "../components/detail/Requires";
import Checked from "../components/detail/Checked";
import Checklist from "../components/detail/Checklist";
import { goTo } from "../utils/navi";

function HouseDetatil({ navigation }) {
  const dispatch = useDispatch();
  const houseId = navigation.state.params.houseId;
  const house = useSelector(state => state.houses).find(
    house => house.id == houseId
  );
  const {
    requires,
    includes,
    options,
    convenience,
    education,
    lifestyle,
    checklist,
    photos
  } = house;

  const onUpdate = () => {
    dispatch(setInputs(house));
    const options = {
      isUpdate: true,
      houseId: houseId,
      title: "집 정보 수정"
    };
    goTo(navigation, "HouseInputs", options);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.componentsContainer}>
          <Requires requires={requires} />

          <Checked title="관리비 포함 항목" checked={includes} />

          <Checked title="옵션 포함 항목" checked={options} />

          <Checked title="편의 시설" checked={convenience} />

          <Checked title="교육 시설" checked={education} />

          <Checked title="주변 환경" checked={lifestyle} />

          <Checklist title="체크리스트" checklist={checklist} />

          {photos && <Photos houseId={houseId} />}
        </View>
      </ScrollView>
      <Button onPress={onUpdate} title="수정하기" color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  scrollView: { flex: 0.9 },
  componentsContainer: {
    paddingHorizontal: 25
  }
});

export default HouseDetatil;
