import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CustomCheckBox({
  checked,
  onPress,
  size = 20,
  color = "#211f30",
  name = ""
}) {
  return (
    <TouchableOpacity style={styles.checkBox} onPress={onPress}>
      <Icon
        size={size}
        color={color}
        name={checked ? "check-box" : "check-box-outline-blank"}
      />

      <Text> {name} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkBox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.33
  }
});

export default CustomCheckBox;
