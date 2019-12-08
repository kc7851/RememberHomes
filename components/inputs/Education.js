import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { setInputs } from "../../redux/actions";

import CustomCheckBox from "./CustomCheckbox";

function Education() {
  const dispatch = useDispatch();
  const inputs = useSelector(state => state.inputs);
  const education = inputs.education;

  const onChange = (name, value) => {
    const newInputs = {
      ...inputs,
      education: {
        ...education,
        [name]: value
      }
    };
    dispatch(setInputs(newInputs));
  };

  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 26 }}>교육 시설</Text>
      </View>
      <View style={styles.checkBoxRowContainer}>
        <CustomCheckBox
          checked={education.어린이집}
          onPress={() => onChange("어린이집", !education.어린이집)}
          name="어린이집"
        />

        <CustomCheckBox
          checked={education.유치원}
          onPress={() => onChange("유치원", !education.유치원)}
          name="유치원"
        />

        <CustomCheckBox
          checked={education.초등학교}
          onPress={() => onChange("초등학교", !education.초등학교)}
          name="초등학교"
        />
      </View>
      <View style={styles.checkBoxRowContainer}>
        <CustomCheckBox
          checked={education.중학교}
          onPress={() => onChange("중학교", !education.중학교)}
          name="중학교"
        />

        <CustomCheckBox
          checked={education.고등학교}
          onPress={() => onChange("고등학교", !education.고등학교)}
          name="고등학교"
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

export default Education;
