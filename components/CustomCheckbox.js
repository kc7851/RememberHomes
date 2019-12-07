import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CustomCheckBox({
  checked,
  onPress,
  size = 26,
  color = "#211f30",
  text = ""
}) {
  return (
    <TouchableOpacity style={styles.checkBox} onPress={onPress}>
      <Icon
        size={size}
        color={color}
        name={checked ? "check-box" : "check-box-outline-blank"}
      />

      <Text> {text} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkBox: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default CustomCheckBox;
