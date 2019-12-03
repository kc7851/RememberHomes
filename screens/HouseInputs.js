import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, ScrollView, Button, StatusBar } from "react-native";
import { addHouse, setInputs, updateHouse } from "../redux/actions";

import CustomInput from "../components/CustomInput";
import CustomRNPickerSelect from "../components/CustomRNPickerSelect";

import { CheckBox } from "react-native-elements";

function HouseInputs({ navigation }) {
  const dispatch = useDispatch();
  const inputs = useSelector(state => state.inputs);

  const isUpdate = navigation.state.params.isUpdate;

  const onAddHouse = () => {
    if (isUpdate) {
      dispatch(updateHouse(navigation.state.params.houseId));
    } else {
      dispatch(addHouse());
    }
    navigation.navigate("HouseList");
  };

  const onChange = (name, text) => {
    const newInputs = {
      ...inputs,
      [name]: text
    };
    dispatch(setInputs(newInputs));
  };

  console.log(check);
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <CustomInput
        text="위치"
        name="location"
        value={inputs.location}
        onChange={onChange}
        padType="default"
      />

      <CustomRNPickerSelect
        text="층수"
        name="floor"
        value={inputs.floor}
        onChange={onChange}
        arrayItems={[
          { key: "2", label: "2", value: "2" },
          { key: "3", label: "3", value: "3" },
          { key: "4", label: "4", value: "4" }
        ]}
      />

      <CustomInput
        text="보증금(만원)"
        name="deposit"
        value={inputs.deposit}
        onChange={onChange}
        padType="number-pad"
      />

      <CustomInput
        text="월세(만원)"
        name="monthlyFee"
        value={inputs.monthlyFee}
        onChange={onChange}
        padType="number-pad"
      />

      <CustomInput
        text="관리비(만원)"
        name="maintenenceFee"
        value={inputs.maintenenceFee}
        onChange={onChange}
        padType="number-pad"
      />

      <CheckBox
        title="습기/누수가 없는가? (벽구석 곰팡이 확인)"
        checked={inputs.fungi}
        onPress={() => onChange("fungi", !inputs.fungi)}
      />

      <CheckBox
        title="화장실과 싱크대 수압이 충분한가?"
        checked={inputs.waterPressure}
        onPress={() => onChange("waterPressure", !inputs.waterPressure)}
      />

      <CheckBox
        title="일조량이 충분한가?"
        checked={inputs.sunshine}
        onPress={() => onChange("sunshine", !inputs.sunshine)}
      />

      <Button onPress={onAddHouse} title="저장하기" color="#841584" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    width: "100%",
    paddingHorizontal: 15
  }
});

export default HouseInputs;
