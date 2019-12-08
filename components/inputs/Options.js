import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { setInputs } from "../../redux/actions";

import CustomCheckBox from "./CustomCheckbox";

function Options() {
  const dispatch = useDispatch();
  const inputs = useSelector(state => state.inputs);
  const options = inputs.options;

  const onChange = (name, value) => {
    const newInputs = {
      ...inputs,
      options: {
        ...options,
        [name]: value
      }
    };
    dispatch(setInputs(newInputs));
  };

  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 26 }}>옵션</Text>
      </View>
      <View style={styles.checkBoxRowContainer}>
        <CustomCheckBox
          checked={options.신발장}
          onPress={() => onChange("신발장", !options.신발장)}
          name="신발장"
        />

        <CustomCheckBox
          checked={options.디지털도어락}
          onPress={() => onChange("디지털도어락", !options.디지털도어락)}
          name="디지털도어락"
        />

        <CustomCheckBox
          checked={options.싱크대}
          onPress={() => onChange("싱크대", !options.싱크대)}
          name="싱크대"
        />
      </View>
      <View style={styles.checkBoxRowContainer}>
        <CustomCheckBox
          checked={options.아일랜드식탁}
          onPress={() => onChange("아일랜드식탁", !options.아일랜드식탁)}
          name="아일랜드식탁"
        />

        <CustomCheckBox
          checked={options.가스레인지}
          onPress={() => onChange("가스레인지", !options.가스레인지)}
          name="가스레인지"
        />

        <CustomCheckBox
          checked={options.전자레인지}
          onPress={() => onChange("전자레인지", !options.전자레인지)}
          name="전자레인지"
        />
      </View>
      <View style={styles.checkBoxRowContainer}>
        <CustomCheckBox
          checked={options.냉장고}
          onPress={() => onChange("냉장고", !options.냉장고)}
          name="냉장고"
        />

        <CustomCheckBox
          checked={options.세탁기}
          onPress={() => onChange("세탁기", !options.세탁기)}
          name="세탁기"
        />

        <CustomCheckBox
          checked={options.에어컨}
          onPress={() => onChange("에어컨", !options.에어컨)}
          name="에어컨"
        />
      </View>
      <View style={styles.checkBoxRowContainer}>
        <CustomCheckBox
          checked={options.TV}
          onPress={() => onChange("TV", !options.TV)}
          name="TV"
        />

        <CustomCheckBox
          checked={options.옷장}
          onPress={() => onChange("옷장", !options.옷장)}
          name="옷장"
        />

        <CustomCheckBox
          checked={options.침대}
          onPress={() => onChange("침대", !options.침대)}
          name="침대"
        />
      </View>
      <View style={styles.checkBoxRowContainer}>
        <CustomCheckBox
          checked={options.책상}
          onPress={() => onChange("책상", !options.책상)}
          name="책상"
        />

        <CustomCheckBox
          checked={options.수납장}
          onPress={() => onChange("수납장", !options.수납장)}
          name="수납장"
        />

        <CustomCheckBox
          checked={options.테라스}
          onPress={() => onChange("테라스", !options.테라스)}
          name="테라스"
        />
      </View>
      <View style={styles.checkBoxRowContainer}>
        <CustomCheckBox
          checked={options.CCTV}
          onPress={() => onChange("CCTV", !options.CCTV)}
          name="CCTV"
        />

        <CustomCheckBox
          checked={options.입구도어락}
          onPress={() => onChange("입구도어락", !options.입구도어락)}
          name="입구도어락"
        />

        <CustomCheckBox
          checked={options.택배보관함}
          onPress={() => onChange("택배보관함", !options.택배보관함)}
          name="택배보관함"
        />
      </View>
      <View style={styles.checkBoxRowContainer}>
        <CustomCheckBox
          checked={options.주차}
          onPress={() => onChange("주차", !options.주차)}
          name="주차"
        />

        <CustomCheckBox
          checked={options.엘리베이터}
          onPress={() => onChange("엘리베이터", !options.엘리베이터)}
          name="엘리베이터"
        />
      </View>
      <View style={styles.checkBoxRowContainer}>
        <Text style={styles.itemText}>기타:</Text>
        <TextInput
          style={styles.itemTextInput}
          onChangeText={val => {
            onChange("기타", val);
          }}
          value={options.기타}
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
    // fontSize: 25,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4
  }
});

export default Options;
