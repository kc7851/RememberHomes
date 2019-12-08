import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text } from "react-native";
import { setInputs } from "../../redux/actions";

import CustomInput from "./CustomInput";
import CustomRNPickerSelect from "./CustomRNPickerSelect";

import {
  floorArray,
  areaArray,
  directionArray,
  housetypeArray,
  housestructureArray,
  busArray,
  subwayArray,
  workdistanceArray
} from "../../constants/InputDatas";

function Require({ title }) {
  const dispatch = useDispatch();
  const inputs = useSelector(state => state.inputs);
  const requires = useSelector(state => state.inputs.requires);

  const onChange = (name, value) => {
    const newInputs = {
      ...inputs,
      requires: {
        ...requires,
        [name]: value
      }
    };
    dispatch(setInputs(newInputs));
  };

  return (
    <View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 26 }}>{title}</Text>
      </View>
      <CustomInput
        text="위치"
        name="location"
        value={requires.location}
        onChange={onChange}
        padType="default"
      />

      <CustomInput
        text="보증금(만원)"
        name="deposit"
        value={requires.deposit}
        onChange={onChange}
        padType="number-pad"
      />

      <CustomInput
        text="월세(만원)"
        name="monthlyFee"
        value={requires.monthlyFee}
        onChange={onChange}
        padType="number-pad"
      />

      <CustomInput
        text="관리비(만원)"
        name="maintenenceFee"
        value={requires.maintenenceFee}
        onChange={onChange}
        padType="number-pad"
      />

      <CustomInput
        text="중개인 연락처"
        name="contact"
        value={requires.contact}
        onChange={onChange}
        padType="number-pad"
      />

      <CustomRNPickerSelect
        placeholder="층을 선택하세요"
        text="층수"
        name="floor"
        value={requires.floor}
        onChange={onChange}
        arrayItems={floorArray}
      />

      <CustomRNPickerSelect
        placeholder="선택하세요."
        text="면적(평)"
        name="area"
        value={requires.area}
        onChange={onChange}
        arrayItems={areaArray}
      />

      <CustomRNPickerSelect
        placeholder="선택하세요."
        text="방향"
        name="direction"
        value={requires.direction}
        onChange={onChange}
        arrayItems={directionArray}
      />

      <CustomRNPickerSelect
        placeholder="선택하세요."
        text="집유형"
        name="housetype"
        value={requires.housetype}
        onChange={onChange}
        arrayItems={housetypeArray}
      />

      <CustomRNPickerSelect
        placeholder="선택하세요."
        text="집구조"
        name="housestructure"
        value={requires.housestructure}
        onChange={onChange}
        arrayItems={housestructureArray}
      />

      <CustomRNPickerSelect
        placeholder="시간을 선택하세요."
        text="버스정류장"
        name="bus"
        value={requires.bus}
        onChange={onChange}
        arrayItems={busArray}
      />

      <CustomRNPickerSelect
        placeholder="시간을 선택하세요."
        text="지하철"
        name="subway"
        value={requires.subway}
        onChange={onChange}
        arrayItems={subwayArray}
      />

      <CustomRNPickerSelect
        placeholder="시간을 선택하세요."
        text="출퇴근시간"
        name="workdistance"
        value={requires.workdistance}
        onChange={onChange}
        arrayItems={workdistanceArray}
      />
    </View>
  );
}

export default Require;
