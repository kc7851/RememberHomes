import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { setInputs } from "../../redux/actions";

import CustomCheckBox from "./CustomCheckbox";

function Includes({ title }) {
  const dispatch = useDispatch();
  const inputs = useSelector(state => state.inputs);
  const includes = inputs.includes;

  const onChange = (name, value) => {
    const newInputs = {
      ...inputs,
      includes: {
        ...includes,
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
          checked={includes.가스비}
          onPress={() => onChange("가스비", !includes.가스비)}
          name="가스비"
        />

        <CustomCheckBox
          checked={includes.전기세}
          onPress={() => onChange("전기세", !includes.전기세)}
          name="전기세"
        />

        <CustomCheckBox
          checked={includes.수도세}
          onPress={() => onChange("수도세", !includes.수도세)}
          name="수도세"
        />
      </View>
      <View style={styles.checkBoxRowContainer}>
        <CustomCheckBox
          checked={includes.정화조}
          onPress={() => onChange("정화조", !includes.정화조)}
          name="정화조"
        />

        <CustomCheckBox
          checked={includes.공동청소비}
          onPress={() => onChange("공동청소비", !includes.공동청소비)}
          name="공동청소비"
        />

        <CustomCheckBox
          checked={includes.공동전기비}
          onPress={() => onChange("공동전기비", !includes.공동전기비)}
          name="공동전기비"
        />
      </View>
      <View style={styles.checkBoxRowContainer}>
        <CustomCheckBox
          checked={includes.주차비}
          onPress={() => onChange("주차비", !includes.주차비)}
          name="주차비"
        />

        <CustomCheckBox
          checked={includes.TV}
          onPress={() => onChange("TV", !includes.TV)}
          name="TV"
        />

        <CustomCheckBox
          checked={includes.인터넷}
          onPress={() => onChange("인터넷", !includes.인터넷)}
          name="인터넷"
        />
      </View>
      <View style={styles.checkBoxRowContainer}>
        <Text style={styles.itemText}>기타:</Text>
        <TextInput
          style={styles.itemTextInput}
          onChangeText={val => {
            onChange("기타", val);
          }}
          value={includes.기타}
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

export default Includes;
