import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, ScrollView, Button, StatusBar, View } from "react-native";
import { addHouse, setInputs, updateHouse } from "../redux/actions";

import CustomInput from "../components/CustomInput";
import CustomRNPickerSelect from "../components/CustomRNPickerSelect";

import CustomCheckBox from "../components/CustomCheckbox";

import { CheckBox } from "react-native-elements";

import Photo from "../components/camera/Photo";
import * as FileSystem from "expo-file-system";

const PHOTOS_DIR = FileSystem.documentDirectory + "photos";

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

  const goToCamera = () => {
    navigation.navigate("HouseCamera");
  };

  const onChange = (name, text) => {
    const newInputs = {
      ...inputs,
      [name]: text
    };
    dispatch(setInputs(newInputs));
  };

  const onDeletePhoto = fileName => {
    const newPhotos = inputs.photos.filter(photo => photo !== fileName);
    const newInputs = {
      ...inputs,
      photos: newPhotos
    };
    dispatch(setInputs(newInputs));
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
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

        <View style={styles.checkBoxContainer}>
          <CustomCheckBox
            checked={inputs.sink}
            onPress={() => onChange("sink", !inputs.sink)}
            text="싱크대"
          />

          <CustomCheckBox
            checked={inputs.aircon}
            onPress={() => onChange("aircon", !inputs.aircon)}
            text="에어컨"
          />
        </View>

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

        {inputs.photos &&
          inputs.photos.map(fileName => {
            return (
              <Photo
                key={fileName}
                uri={`${PHOTOS_DIR}/${fileName}`}
                fileName={fileName}
                onDelete={onDeletePhoto}
              />
            );
          })}
      </ScrollView>
      <View style={styles.bottom}>
        <Button onPress={goToCamera} title="사진찍기" color="#841584" />
        <Button onPress={onAddHouse} title="저장하기" color="#841584" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    width: "100%",
    paddingHorizontal: 15
  },
  bottom: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  scrollView: { flex: 0.9 },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default HouseInputs;
