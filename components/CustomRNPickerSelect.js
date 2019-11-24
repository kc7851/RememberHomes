import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

function CustomRNPickerSelect({ text, name, value, onChange, arrayItems }) {
  return (
    <View style={styles.itemsContainer}>
      <Text style={styles.itemText}>{text}:</Text>
      <RNPickerSelect
        placeholder={{
          label: "층을 선택하세요.",
          value: null,
          color: "black"
        }}
        style={pickerSelectStyles}
        // style={{inputIOS: {
        //     color: "red"
        // }}}
        onValueChange={val => {
          onChange(name, val);
        }}
        value={value}
        items={arrayItems}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemsContainer: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 5,
    alignItems: "center",
    width: "100%",
    height: 40
  },
  itemText: {
    flex: 1,
    fontSize: 25
  },
  pickerSelect: {
    flex: 1,
    fontSize: 25
  }
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 25,
    // paddingVertical: 14,
    // height: 100,
    // paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    width: 174,
    color: "black"
    // paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    flex: 1,
    fontSize: 25,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 4,
    color: "black",
    paddingRight: 30 // to ensure the text is never behind the icon
  }
};

export default CustomRNPickerSelect;
