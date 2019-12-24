import React from "react";
import { View, Text } from "react-native";
import { getValuesTruthyWithEtc } from "../../utils/object";

function Checked({ title, checked }) {
  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ paddingVertical: 5 }}>
        <Text style={{ fontSize: 24 }}>{title}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 18, marginTop: 5 }}>
          {getValuesTruthyWithEtc(checked).join(", ")}
        </Text>
      </View>
    </View>
  );
}

export default Checked;
