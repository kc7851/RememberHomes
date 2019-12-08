import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { setInputs } from "../../redux/actions";

import CustomCheckBox from "./CustomCheckbox";

function Convenience() {
  const dispatch = useDispatch();
  const inputs = useSelector(state => state.inputs);
  const convenience = inputs.convenience;

  const onChange = (name, value) => {
    const newInputs = {
      ...inputs,
      convenience: {
        ...convenience,
        [name]: value
      }
    };
    dispatch(setInputs(newInputs));
  };

  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 26 }}>편의 시설</Text>
      </View>
      <View style={styles.checkBoxRowContainer}>
        <CustomCheckBox
          checked={convenience.시장}
          onPress={() => onChange("시장", !convenience.시장)}
          name="시장"
        />

        <CustomCheckBox
          checked={convenience.마트}
          onPress={() => onChange("마트", !convenience.마트)}
          name="마트"
        />

        <CustomCheckBox
          checked={convenience.편의점}
          onPress={() => onChange("편의점", !convenience.편의점)}
          name="편의점"
        />
      </View>
      <View style={styles.checkBoxRowContainer}>
        <CustomCheckBox
          checked={convenience.코인빨래방}
          onPress={() => onChange("코인빨래방", !convenience.코인빨래방)}
          name="코인빨래방"
        />

        <CustomCheckBox
          checked={convenience.카페}
          onPress={() => onChange("카페", !convenience.카페)}
          name="카페"
        />

        <CustomCheckBox
          checked={convenience.음식점}
          onPress={() => onChange("음식점", !convenience.음식점)}
          name="음식점"
        />
      </View>
      <View style={styles.checkBoxRowContainer}>
        <CustomCheckBox
          checked={convenience.패스트푸드}
          onPress={() => onChange("패스트푸드", !convenience.패스트푸드)}
          name="패스트푸드"
        />

        <CustomCheckBox
          checked={convenience.헬스장}
          onPress={() => onChange("헬스장", !convenience.헬스장)}
          name="헬스장"
        />
      </View>
      <View style={styles.checkBoxRowContainer}>
        <Text style={styles.itemText}>기타:</Text>
        <TextInput
          style={styles.itemTextInput}
          onChangeText={val => {
            onChange("기타", val);
          }}
          value={convenience.기타}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkBoxRowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  checkboxAlign: {
    flex: 0.33
  },
  itemText: {
    flex: 0.12
  },
  itemTextInput: {
    flex: 0.8,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4
  }
});

export default Convenience;
