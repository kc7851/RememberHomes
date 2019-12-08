import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, Text } from "react-native";
import { setInputs } from "../../redux/actions";

import CustomCheckBox from "./CustomCheckbox";

function Lifestyle({ title }) {
  const dispatch = useDispatch();
  const inputs = useSelector(state => state.inputs);
  const lifestyle = inputs.lifestyle;

  const onChange = (name, value) => {
    const newInputs = {
      ...inputs,
      lifestyle: {
        ...lifestyle,
        [name]: value
      }
    };
    dispatch(setInputs(newInputs));
  };

  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 26 }}>{title}</Text>
      </View>
      <View style={styles.checkBoxRowContainer}>
        <CustomCheckBox
          checked={lifestyle.공원}
          onPress={() => onChange("공원", !lifestyle.공원)}
          name="공원"
        />

        <CustomCheckBox
          checked={lifestyle.한강}
          onPress={() => onChange("한강", !lifestyle.한강)}
          name="한강"
        />

        <CustomCheckBox
          checked={lifestyle.내천}
          onPress={() => onChange("내천", !lifestyle.내천)}
          name="내천"
        />
      </View>
      <View style={styles.checkBoxRowContainer}>
        <CustomCheckBox
          checked={lifestyle.등산}
          onPress={() => onChange("등산", !lifestyle.등산)}
          name="등산"
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

export default Lifestyle;
