import React from "react";
import { View, Text } from "react-native";
import { CheckBox } from "react-native-elements";

function Checklist({ title, checklist }) {

  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ paddingVertical: 5 }}>
        <Text style={{ fontSize: 24 }}>{title}</Text>
      </View>
      <CheckBox
        title="융자가 없는가?"
        checked={checklist.융자}
        disabled={false}
      />

      <CheckBox
        title="대출이 가능한가?"
        checked={checklist.대출}
      />

      <CheckBox
        title="습기/누수가 없는가? (벽구석 곰팡이 확인)"
        checked={checklist.누수}
      />

      <CheckBox
        title="화장실과 싱크대 수압이 충분한가?"
        checked={checklist.수압}
      />

      <CheckBox
        title="배수가 잘 되는가?"
        checked={checklist.배수}
      />

      <CheckBox
        title="일조량이 충분한가?"
        checked={checklist.일조량}
      />

      <CheckBox
        title="환기가 잘 되는 구조인가?"
        checked={checklist.환기}
      />

      <CheckBox
        title="외풍은 없는가?"
        checked={checklist.외풍}
      />

      <CheckBox
        title="층간소음은 없는가?"
        checked={checklist.층간소음}
      />

      <CheckBox
        title="도배를 새로 해주는가?"
        checked={checklist.도배}
      />

      <CheckBox
        title="장판을 새로 해주는가?"
        checked={checklist.장판}
      />

      <CheckBox
        title="집 주변이 시끄럽지 않은가?(대로변 or 주변상가)"
        checked={checklist.소음}
      />

      <CheckBox
        title="반려동물을 키울 수 있는가?"
        checked={checklist.반려동물}
      />
    </View>
  );
}

export default Checklist;
