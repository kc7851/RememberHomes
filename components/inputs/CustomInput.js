import React from "react";

import { StyleSheet, Text, TextInput, View } from "react-native";

function CustomInput({ text, name, value, onChange, padType }) {
  return (
    <View style={styles.itemsContainer}>
      <Text style={styles.itemText}>{text}:</Text>
      <TextInput
        keyboardType={padType}
        onChangeText={val => {
          onChange(name, val);
        }}
        value={value}
        style={styles.itemTextInput}
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
    fontSize: 20
  },
  itemTextInput: {
    flex: 1,
    fontSize: 20,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    // justifyContent: 'center',
    // alignSelf: "flex-start"
  }
});

export default CustomInput;
