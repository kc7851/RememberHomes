import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text } from "react-native";
import { setInputs } from "../../redux/actions";

import { CheckBox } from "react-native-elements";

function Checklist({ title }) {
  const dispatch = useDispatch();
  const inputs = useSelector(state => state.inputs);
  const checklist = inputs.checklist;

  const onChange = (name, value) => {
    const newInputs = {
      ...inputs,
      checklist: {
        ...checklist,
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
      <CheckBox
        title="융자가 없는가?"
        checked={checklist.융자}
        onPress={() => onChange("융자", !checklist.융자)}
      />

      <CheckBox
        title="대출이 가능한가?"
        checked={checklist.대출}
        onPress={() => onChange("대출", !checklist.대출)}
      />

      <CheckBox
        title="습기/누수가 없는가? (벽구석 곰팡이 확인)"
        checked={checklist.누수}
        onPress={() => onChange("누수", !checklist.누수)}
      />

      <CheckBox
        title="화장실과 싱크대 수압이 충분한가?"
        checked={checklist.수압}
        onPress={() => onChange("수압", !checklist.수압)}
      />

      <CheckBox
        title="배수가 잘 되는가?"
        checked={checklist.배수}
        onPress={() => onChange("배수", !checklist.배수)}
      />

      <CheckBox
        title="일조량이 충분한가?"
        checked={checklist.일조량}
        onPress={() => onChange("일조량", !checklist.일조량)}
      />

      <CheckBox
        title="환기가 잘 되는 구조인가?"
        checked={checklist.환기}
        onPress={() => onChange("환기", !checklist.환기)}
      />

      <CheckBox
        title="외풍은 없는가?"
        checked={checklist.외풍}
        onPress={() => onChange("외풍", !checklist.외풍)}
      />

      <CheckBox
        title="층간소음은 없는가?"
        checked={checklist.층간소음}
        onPress={() => onChange("층간소음", !checklist.층간소음)}
      />

      <CheckBox
        title="도배를 새로 해주는가?"
        checked={checklist.도배}
        onPress={() => onChange("도배", !checklist.도배)}
      />

      <CheckBox
        title="장판을 새로 해주는가?"
        checked={checklist.장판}
        onPress={() => onChange("장판", !checklist.장판)}
      />

      <CheckBox
        title="집 주변이 시끄럽지 않은가?(대로변 or 주변상가)"
        checked={checklist.소음}
        onPress={() => onChange("소음", !checklist.소음)}
      />

      <CheckBox
        title="반려동물을 키울 수 있는가?"
        checked={checklist.반려동물}
        onPress={() => onChange("반려동물", !checklist.반려동물)}
      />
    </View>
  );
}

export default Checklist;
