import React from "react";
import { View, Text } from "react-native";
import Require from "./Require";

function Requires({ requires }) {
  return (
    <View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 26 }}></Text>
      </View>
      <Require title="위치" description={requires.location} unit="" />
      <Require title="보증금" description={requires.deposit} unit=" 만원" />
      <Require title="월세" description={requires.monthlyFee} unit=" 만원" />
      <Require title="관리비" description={requires.maintenenceFee} unit=" 만원" />
      <Require title="중개인 연락처" description={requires.contact} unit="" />
      <Require title="방향" description={requires.direction} unit="" />
      <Require title="층수" description={requires.floor} unit=" 층" />
      <Require title="면적" description={requires.area} unit=" 평" />
      <Require title="집유형" description={requires.housetype} unit="" />
      <Require title="집구조" description={requires.housestructure} unit="" />
      <Require title="버스정류장 거리" description={requires.bus} unit=" 분" />
      <Require title="지하철 거리" description={requires.subway} unit=" 분" />
      <Require
        title="출퇴근 시간"
        description={requires.workdistance}
        unit=" 분"
      />
    </View>
  );
}

export default Requires;
