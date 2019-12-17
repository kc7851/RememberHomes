import React from "react";
import { View, Text } from "react-native";
import { getValuesTruthyWithEtc } from "../../utils/object";

function Checked({ title, checked }) {
  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 26 }}>{title}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 20, marginTop: 5 }}>
          {getValuesTruthyWithEtc(checked).join(", ")}
        </Text>
      </View>
    </View>
  );
}

export default Checked;
